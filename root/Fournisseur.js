import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Frouni from '../src/vue/menu/Fournisseur';
import AjoutFournisseur from '../src/vue/menu/AjoutFournisseur';

class Fournisseur  extends Component{
  render(){
    return(
        <Frouni />

    );
  }


};
export default Fournisseur;
