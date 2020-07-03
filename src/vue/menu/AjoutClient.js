import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  findNodeHandle,
} from 'react-native';
import TextInputReset from 'react-native-text-input-reset';
import ClientStyles from './ClientStyles';
import User from './images/user.png';
import Tel from './images/tel.png';
import Email from './images/email.webp';
import Enregistrer from './images/enregistrer.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {ajouterClient} from '../../controleur/menu/crudClient';
import Client from '../../Modele/client/Client';
import Clientjs from './Client';
  class AjoutClient  extends Component{

    state={
         clientNomActuel: null,
         clientTelActuel: null,
         clientMailActuel: null,
         clientAdresseActuel: null,
         clientNotesActuel: null,
         clientCodeActuel : null,

       }


       ajouter = () => {
       this.client=new Client();
       this.client.nom=this.state.clientNomActuel;
       this.client.tel=this.state.clientTelActuel;
       this.client.mail=this.state.clientMailActuel;
       this.client.adresse=this.state.clientAdresseActuel;
       this.client.notes=this.state.clientNotesActuel;
       this.client.code=this.state.clientCodeActuel;

       ajouterClient(this.client);
       Alert.alert("Le Client::"+ this.client.nom+"est Ajouter avec succès!!");
        this.clientNomActuel.clear();
        this.clientTelActuel.clear();
        this.clientMailActuel.clear();
        this.clientAdresseActuel.clear();
        this.clientNotesActuel.clear();
       };


  render(){
    return(

      <View style={{flex: 1}}>

        <View style={{marginTop: '20%'}}>
               <View style={ClientStyles.Test}>
             <TextInput
             style={ClientStyles.input}
             placeholder={'Nom Client'}
             ref={input => { this.clientNomActuel = input }}
             placeholderTextColor={'#aaa69d'}
             underlineColorAndroid='transparent'
             value={this.state.clientNomActuel}
             onChangeText={(text) => this.setState(prevState => ({
               clientNomActuel: prevState.clientNomActuel =text
               }))
             }
             />
              <Image source={User} style={ClientStyles.Iconuser} />
         </View>
         <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

         <View style={ClientStyles.Test}>
               <TextInput
                  style={ClientStyles.input}
                  ref={input => { this.clientTelActuel = input }}
                  placeholder={'Telephone'}
                  keyboardType='numeric'
                  placeholderTextColor={'#aaa69d'}
                  underlineColorAndroid='transparent'
                  value={this.state.clientTelActuel}
                  onChangeText={(text) => this.setState(prevState => ({
                    clientTelActuel: prevState.clientTelActuel =text
                    }))
                  }
               />

               <Image source={Tel} style={ClientStyles.Icontel} />
          </View>
          <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

          <View style={ClientStyles.Test}>
            <TextInput
              style={ClientStyles.input}
              ref={input => { this.clientMailActuel = input }}
              placeholder={'E-mail'}
              keyboardType='email-address'
              placeholderTextColor={'#aaa69d'}
              underlineColorAndroid='transparent'
              value={this.state.clientMailActuel}
              onChangeText={(text) => this.setState(prevState => ({
                clientMailActuel: prevState.clientMailActuel =text
                }))
              }
              />
            <Image source={Email} style={ClientStyles.Iconemail} />
          </View>
          <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

          <View>
             <TextInput
             style={ClientStyles.input}
             ref={input => { this.clientAdresseActuel = input }}
             placeholder={'Adresse'}
             placeholderTextColor={'#aaa69d'}
             underlineColorAndroid='transparent'
             value={this.state.clientAdresseActuel}
             onChangeText={(text) => this.setState(prevState => ({
               clientAdresseActuel: prevState.clientAdresseActuel =text
               }))
             }
             />
          </View>
           <View style={{width: 350,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

           <View>
             <TextInput
             style={ClientStyles.input}
             ref={input => { this.clientNotesActuel = input }}
             placeholder={'Note'}
             multiline
             placeholderTextColor={'#aaa69d'}
             underlineColorAndroid='transparent'
             value={this.state.clientNotesActuel}
             onChangeText={(text) => this.setState(prevState => ({
               clientNotesActuel: prevState.clientNotesActuel =text
               }))
             }
             />
           </View>
           <View style={{width: 350,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>
      </View>

      <View style={{flexDirection: 'row-reverse'}}>
        <TouchableOpacity onPress={this.ajouter}>
          <Image source={Enregistrer} style={ClientStyles.Iconenreg} />
        </TouchableOpacity>
      </View>

       </View>
    );
  }
};
export default AjoutClient;
