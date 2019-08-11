import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet  
} from 'react-native';
import { Icon } from 'react-native-elements';
import UI from '../common/UI';

export default class EventEntry extends Component {
  render() {
    return (      
        <View style={styles.entryView}>
            <View  style={styles.entryTitle}>
                <View>
                    <Icon name={UI.icons.WSLoginEvent} color={UI.colors.textHighlight} size={35} type="material-community" />
                </View>
                <View>
                    <Text style={styles.entryTitleText}>{this.props.event.title}</Text>
                </View>
            </View>
            <View style={styles.entrySubDataSource}>
                <Text style={styles.entrySubDataSourceText}>{this.props.event.source}</Text>
            </View>
            <View style={styles.entryMessage}>
                <Text style={styles.entryMessageText}>{this.props.event.message}</Text>
            </View>
            <View style={styles.entrySubData}>                
                <View style={styles.entrySubDataTime}>
                    <Text style={styles.entrySubDataTimeText}>{this.props.event.time}</Text>                    
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create( {
    entryView: {
        flex: 3,
        flexDirection: 'column',
        top: 20,
        left: 10,
        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: '#aaa',
        marginBottom: 5,
        marginTop: 5,
        marginRight: 18
    },
    entryTitle: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 4
    },
    entryTitleText: {
        fontSize: 18,
        fontFamily: 'Roboto',        
        color: UI.colors.textHighlight,
        textAlignVertical: "top",        
        left: 5,
        bottom: 2
    },
    entryMessage: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlignVertical: 'top',
        top: -20,
        left: 10
    },
    entryMessageText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        color: UI.colors.textNormal        
    },
    entrySubData: {
        flex: 1,
        flexDirection: 'row',        
        top: 20
    },
    entrySubDataTime: {
        alignItems: 'flex-end',
        top: -20,
        left: 10
    },
    entrySubDataSource: {
        alignItems: 'flex-start',
        top: -23,
        left: 40
    },
    entrySubDataTimeText: {
        fontSize: 12,
        fontFamily: 'Roboto',
        color: UI.colors.textSubNormal,
        textAlign: 'left'       
    },
    entrySubDataSourceText: {
        fontSize: 12,
        fontFamily: 'Roboto',
        color: UI.colors.textSubNormal,
        textAlign: 'right'
    }
})