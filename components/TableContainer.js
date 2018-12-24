import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import ResultTile from './ResultTile';


class TableContainer extends React.Component {
    
    
    render(){
        return (
            <ScrollView style={styles.container}>
                <ResultTile 
                    trayname="Osteo1"
                    location="Palos"
                    lastPerson="John D"
                    lastUpdate="10/11/2018"
                />
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey'
    }
})
export default TableContainer;