import React, { Component } from 'react';
import { 
  View,
  FlatList,
  StyleSheet  
} from 'react-native';
import UI from './app/common/UI';
import { ListItem, Header } from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      refreshing: false,
      error: false,
      data: [
        {
          id: '1',
          type: 'WSLoginEvent',
          title: 'Login Event',
          message: 'Some one logged into the workstation remotely. This triggerred a notification to be sent',
          action: 'none',
          metadata: 'IP: 12.23.45.56',
          time: '2019-08-10 17:35:55 PST',
          source: 'WS-PopOS-1'
        }
      ]
    };
  }
  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  handleRefresh() {
    this.setState(
      {        
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  }
  getAvatar(title) { 
    return `https://api.adorable.io/avatars/288/${title}`;
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "17%"
        }}
      />
    );
  };
  render() {  
    return (
      <View style={styles.mainAppView}>
        <Header
            // leftComponent={{ icon: 'menu', color: '#fff' }}
            leftComponent={{ text: 'Ether Notify', style: { color: '#fff', fontSize: 24, width: '190%', fontFamily: 'Roboto' } }}
            rightComponent={{ icon: 'search', color: '#fff' }}
        />
        <FlatList
          data={ this.state.data }
          renderItem={({ item }) => {
            return (
              <ListItem 
              title={item.title}
              subtitle={item.message}
              leftAvatar={{ source: { uri: this.getAvatar(item.title) } }} 
              containerStyle={{ borderBottomWidth: 0 }}            
              />
            )
          }}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainAppView: { 
    flex: 1,
    flexDirection: 'column',
    backgroundColor: UI.colors.background
  }
});