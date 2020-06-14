import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import FournisseurStyles from './FournisseurStyles';
import DetailFournisseur from './DetailFournisseur';
import AjoutFournisseur from './AjoutFournisseur';
import Call from './images/call.png';
import Mesg from './images/message-512.png';
import Add from './images/add-user.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

function goToDetailFournisseur() {

}

function goToAjoutFournisseur(){

}
export default function Fournisseur(){
    return(
      <View style={FournisseurStyles.Container}>
           <View style={{marginTop: '10%'}}>
                <View style={FournisseurStyles.Test}>


                <TouchableOpacity  onPress={goToDetailFournisseur()}>
                   <Text style={FournisseurStyles.Text}> Nom Fournisseur </Text>
                 </TouchableOpacity>



                   <Image source={Call} style={FournisseurStyles.Iconcall} />
                   <Image source={Mesg} style={FournisseurStyles.Iconmsg} />

                 </View>
                 <View>{ /*cree le lign*/}
                   <View style={{width: '100%' ,height: 1,backgroundColor: '#000000'}}/>
                 </View>

               <View>
                 <TouchableOpacity  onPress={goToAjoutFournisseur()}>
               <Image source={Add} style={FournisseurStyles.Iconadd} />
                 </TouchableOpacity>
              </View>
        </View>
      </View>
    );



};
