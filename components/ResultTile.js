import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ResultTile extends React.Component {
    render(){
        return (
            <View style={{flex: 0, flexDirection: 'row', alignItems: 'stretch', height: 50, backgroundColor: 'grey'}}>
                <Text>{this.props.trayname}</Text>
                <Text>{this.props.location}</Text>
                <Text>{this.props.lastPerson}</Text>
                <Text>{this.props.lastupdate}</Text>
            </View>
        )
    }
};



export default ResultTile;