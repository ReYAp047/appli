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

import {ajouterFournisseur} from '../../controleur/menu/crudFournisseur';
import Fournisseur from '../../Modele/fournisseur/Fournisseur';

  class AjoutFournisseur  extends Component{

    state={
         fournisseurNomActuel: null,
         fournisseurTelActuel: null,
         fournisseurMailActuel: null,
         fournisseurAdresseActuel: null,
         fournisseurNotesActuel: null,
         fournisseurCodeActuel : null,
       }
 
       ajouter = () => {
       this.fournisseur=new Fournisseur();
       this.fournisseur.nom=this.state.fournisseurNomActuel;
       this.fournisseur.tel=this.state.fournisseurTelActuel;
       this.fournisseur.mail=this.state.fournisseurMailActuel;
       this.fournisseur.adresse=this.state.fournisseurAdresseActuel;
       this.fournisseur.notes=this.state.fournisseurNotesActuel;
       this.fournisseur.code=this.state.clientCodeActuel;
       ajouterFournisseur(this.fournisseur);
       };


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
               value={this.state.fournisseurNomActuel}
               onChangeText={(text) => this.setState(prevState => ({
                 fournisseurNomActuel: prevState.fournisseurNomActuel =text
                 }))
               }
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
                value={this.state.fournisseurTelActuel}
                onChangeText={(text) => this.setState(prevState => ({
                  fournisseurTelActuel: prevState.fournisseurTelActuel =text
                  }))
                }
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
            value={this.state.fournisseurMailActuel}
            onChangeText={(text) => this.setState(prevState => ({
              fournisseurMailActuel: prevState.fournisseurMailActuel =text
              }))
            }
            />
          <Image source={Email} style={FournisseurStyles.Iconemail} />
        </View>
        <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>



        <View>
           <TextInput
           style={FournisseurStyles.input}
           placeholder={'Adresse'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           value={this.state.fournisseurAdresseActuel}
           onChangeText={(text) => this.setState(prevState => ({
             fournisseurAdresseActuel: prevState.fournisseurAdresseActuel =text
             }))
           }
           />
        </View>
         <View style={{width: 350,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

         <View>
           <TextInput
           style={FournisseurStyles.input}
           placeholder={'Note'}
           placeholderTextColor={'#aaa69d'}
           underlineColorAndroid='transparent'
           value={this.state.fournisseurNotesActuel}
           onChangeText={(text) => this.setState(prevState => ({
             fournisseurNotesActuel: prevState.fournisseurNotesActuel =text
             }))
           }
           />
         </View>
         <View style={{width: 350,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>
      </View>

      <View style={{flexDirection: 'row-reverse'}}>
        <TouchableOpacity onPress={this.ajouter}>
          <Image source={Enregistrer} style={FournisseurStyles.Iconenreg} />
        </TouchableOpacity>
      </View>

       </View>
    );
  }
};
export default AjoutFournisseur;
