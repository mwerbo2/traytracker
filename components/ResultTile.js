import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ResultTile extends React.Component {
    render(){
        return (
            <View>
                <Text>{this.props.trayname}</Text>
                <Text>{this.props.location}</Text>
                <Text>{this.props.lastPerson}</Text>
                <Text>{this.props.lastupdate}</Text>
            </View>
        )
    }
};

export default ResultTile;