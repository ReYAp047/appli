import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import {createAppContainer, DrawerItems,} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Cl from '../src/vue/menu/Client';
import AjoutClient from '../src/vue/menu/AjoutClient';
import DetailClient from '../src/vue/menu/DetailClient';


const Navigator = createStackNavigator({
    Cl: { screen: Cl },
    AjoutClient: { screen: AjoutClient },
    DetailClient: { screen: DetailClient },
});


const Client = createAppContainer(Navigator);

export default Client;
