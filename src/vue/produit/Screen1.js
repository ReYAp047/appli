//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image, TouchableOpacity, FlatList, Alert } from 'react-native';
// import all basic components
import {createAppContainer, DrawerItems,} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import {nombreProduits} from '../../controleur/produit/crudProduit';
import List_Produits from './List_Produits';


  class Screen1 extends Component {
    render() {
      nombreProduits();
      return (

      <List_Produits />
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
  titre: {
    fontSize: 25,
    color: "#0581D4",
    fontFamily: "Lucida Fax",
  fontWeight: 'normal',
    paddingTop: 5,
    marginLeft: 5,
    justifyContent: 'flex-start',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: '#F44336',
    marginRight: 5,

},
circle_text:{
  marginLeft: 21,
  marginTop: 14,
  color: "white",
  fontWeight: 'bold',
  fontSize: 15

},
produit_circle:{
  width: 35,
  height: 35,
  borderRadius: 35/2,
  backgroundColor: '#0099FF',
  marginRight: 5,
  marginTop: 7
},
circle_produit_text:{
  marginLeft: 13,
  marginTop: 7,
  color: "white",
  fontWeight: 'bold',
  fontSize: 15

},
image: {
   width: 35,
   height: 35,
   marginLeft: 7
},
bottom: {
  flex: 1,
  justifyContent: 'flex-end',
}
});





  export default Screen1;
