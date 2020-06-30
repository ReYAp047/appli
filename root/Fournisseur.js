import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import List_Fournisseurs from '../src/vue/menu/Fournisseur';
import AjoutFournisseur from '../src/vue/menu/AjoutFournisseur';
import DetailFournisseur from '../src/vue/menu/DetailFournisseur';


const Navigator = createStackNavigator({
    List_Fournisseurs: { screen: List_Fournisseurs },
    AjoutFournisseur: { screen: AjoutFournisseur },
    DetailFournisseur: { screen: DetailFournisseur },
});


const Fournisseur = createAppContainer(Navigator);

export default Fournisseur;
