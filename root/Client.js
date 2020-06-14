import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Cl from '../src/vue/menu/Client';

class Client  extends Component{
  render(){
    return(
        <Cl />

    );
  }


};
export default Client;
