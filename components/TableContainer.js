import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import ResultTile from './ResultTile';
import DropDown from './DropDown';


class TableContainer extends React.Component {
    render(){
        return (
            <View>
                <DropDown />             
                    <ResultTile 
                        trayname="Osteo1"
                        location="Palos"
                        lastPerson="John D"
                        lastUpdate="10/11/2018"
                    />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey'
    }
})
export default TableContainer;