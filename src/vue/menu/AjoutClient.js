import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import ClientStyles from './ClientStyles';
import User from './images/user.png';
import Tel from './images/tel.png';
import Email from './images/email.webp';
import Enregistrer from './images/enregistrer.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

  class AjoutClient  extends Component{
  render(){
    return(

      <View style={{flex: 1}}>

      <View style={{marginTop: '20%'}}>
             <View style={ClientStyles.Test}>
           <TextInput
           style={ClientStyles.input}
           placeholder={'Nom Client'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           />
            <Image source={User} style={ClientStyles.Iconuser} />
            </View>

           <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>






      <View style={ClientStyles.Test}>
           <TextInput
           style={ClientStyles.input}
           placeholder={'Telephone'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           />
           <Image source={Tel} style={ClientStyles.Icontel} />
      </View>
           <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>




      <View style={ClientStyles.Test}>
           <TextInput
           style={ClientStyles.input}
           placeholder={'E-mail'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           />

           <Image source={Email} style={ClientStyles.Iconemail} />
      </View>
           <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>



           <TextInput
           style={ClientStyles.input}
           placeholder={'Adresse'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           />
           <View style={{width: 350,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

           <TextInput
           style={ClientStyles.input}
           placeholder={'Note'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           />
           <View style={{width: 350,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>
      </View>


      <TouchableOpacity  >
    <Image source={Enregistrer} style={ClientStyles.Iconenreg} />
      </TouchableOpacity>


       </View>
    );
  }
};
export default AjoutClient;
