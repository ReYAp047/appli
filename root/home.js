import React, { Component } from 'react';
import { StyleSheet, View, Text,Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import {createAppContainer, DrawerItems,} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
// Components
import List_Produits from '../src/vue/produit/List_Produits';
import AjouterProd from '../src/vue/produit/AjouterProd';
import DetailProduit from '../src/vue/produit/DetailProduit';
import {nombreProduits} from '../src/controleur/produit/crudProduit';
import {afficheProduits} from '../src/controleur/produit/crudProduit';

const Navigator = createStackNavigator({

    List_Produits: { screen: List_Produits },
    AjouterProd: { screen: AjouterProd },
    DetailProduit:{ screen: DetailProduit },

});


const Home = createAppContainer(Navigator);

export default Home;
