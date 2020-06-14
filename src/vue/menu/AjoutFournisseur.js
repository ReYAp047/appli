import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import FournisseurStyles from './FournisseurStyles';
import User from './images/user.png';
import Tel from './images/tel.png';
import Email from './images/email.webp';
import Enregistrer from './images/enregistrer.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

  class AjoutFournisseur  extends Component{
  render(){
    return(

      <View style={{flex: 1}}>

      <View style={{marginTop: '20%'}}>
             <View style={FournisseurStyles.Test}>
           <TextInput
           style={FournisseurStyles.input}
           placeholder={'Nom Fournisseur'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           />
            <Image source={User} style={FournisseurStyles.Iconuser} />
            </View>

           <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>






      <View style={FournisseurStyles.Test}>
           <TextInput
           style={FournisseurStyles.input}
           placeholder={'Telephone'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           />
           <Image source={Tel} style={FournisseurStyles.Icontel} />
      </View>
           <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>




      <View style={FournisseurStyles.Test}>
           <TextInput
           style={FournisseurStyles.input}
           placeholder={'E-mail'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           />

           <Image source={Email} style={FournisseurStyles.Iconemail} />
      </View>
           <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>



           <TextInput
           style={FournisseurStyles.input}
           placeholder={'Adresse'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           />
           <View style={{width: 350,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

           <TextInput
           style={FournisseurStyles.input}
           placeholder={'Note'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           />
           <View style={{width: 350,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>
      </View>


      <TouchableOpacity  >
    <Image source={Enregistrer} style={FournisseurStyles.Iconenreg} />
      </TouchableOpacity>


       </View>
    );
  }
};
export default AjoutFournisseur;
