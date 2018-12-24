import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

// import AppNavigator from './navigation/AppNavigator';
import TableContainer from "./components/TableContainer";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <TableContainer />
      </View>
    )
  };
}

const styles = StyleSheet.create({
});
