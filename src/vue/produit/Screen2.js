import React, { useState, useEffect, Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import {createAppContainer, DrawerItems,} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
export default class Screen2 extends Component {
  static navigationOptions ={
    title: 'Contoleur',

  };
  render() {
    return (
    <View style={styles.MainContainer}>
      <Text style={{ fontSize: 23 }}> Contoleur </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
