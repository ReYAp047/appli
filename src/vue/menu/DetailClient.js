import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Det_ClientStyles from './Det_ClientStyles';
import ClientStyles from './ClientStyles';
import User from './images/user.png';
import Tel from './images/tel.png';
import Note from './images/note.png';
import Location from './images/location.png';
import Email from './images/email.webp';
import Modifier from './images/modifier.png';
import Supprimer from './images/supprimer.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Client from '../../Modele/client/Client';
import {modifierClient} from '../../controleur/menu/crudClient';
import {supprimerClient} from '../../controleur/menu/crudClient'
import Cl from './Client';
class DetailClient extends Component{


  state={
       clientNomActuel: null,
       clientTelActuel: null,
       clientMailActuel: null,
       clientAdresseActuel: null,
       clientNotesActuel: null,
       clientCodeActuel : null,

     }

     modifier = () => {
     this.client=new Client();
     if(this.state.clientNomActuel){
       this.client.nom=this.state.clientNomActuel;
     }else {
       this.client.nom=it.nom;
     }

     if(this.state.clientTelActuel){
       this.client.tel=this.state.clientTelActuel;
     }else {
       this.client.tel=it.tel;
     }

     if(this.state.clientMailActuel){
       this.client.mail=this.state.clientMailActuel;
     }else {
       this.client.mail=it.mail;
     }


     if(this.state.clientAdresseActuel){
       this.client.adresse=this.state.clientAdresseActuel;
     }else {
       this.client.adresse=it.adresse;
     }


     if(this.state.clientNotesActuel){
       this.client.notes=this.state.clientNotesActuel;
     }else {
       this.client.notes=it.notes;
     }


     if(this.state.clientCodeActuel){
       this.client.code=this.state.clientCodeActuel;
     }else {
       this.client.code=it.code;
     }



     modifierClient(this.client);
     };
     supprimer=() => {
       supprimerClient(it.tel);
       Alert.alert("Le Client::"+it.nom+"est supprimé avec succès!!");
       this.props.navigation.push('Cl');
     };




  render(){
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'item');
global.it=item;
    return(
      <View style={Det_ClientStyles.Container}>

            <View >

                <View style={Det_ClientStyles.Test}>
                  <Image source={User} style={Det_ClientStyles.Iconuser} />
                  <TextInput
                  style={ClientStyles.input}
                  placeholderTextColor={'#aaa69d'}
                  underlineColorAndroid='transparent'
                  value={this.state.clientNomActuel}
                  defaultValue={item.nom}
                  onChangeText={(text) => this.setState(prevState => ({
                    clientNomActuel: prevState.clientNomActuel =text
                    }))
                  }
                  />

                            </View>



                            <View style={Det_ClientStyles.Test}>
                  <Image source={Tel} style={Det_ClientStyles.Icontel} />
                    <TextInput
                    style={ClientStyles.input}
                    placeholderTextColor={'#aaa69d'}
                    underlineColorAndroid='transparent'
                    value={this.state.clientTelActuel}
                    keyboardType='numeric'
                    defaultValue={item.tel}
                    onChangeText={(text) => this.setState(prevState => ({
                      clientTelActuel: prevState.clientTelActuel =text
                      }))
                    }
                    />
                            </View>




                            <View style={Det_ClientStyles.Test}>
                         <Image source={Email} style={Det_ClientStyles.Iconemail} />
                         <TextInput
                         style={ClientStyles.input}
                         placeholderTextColor={'#aaa69d'}
                         underlineColorAndroid='transparent'
                         value={this.state.clientMailActuel}
                         defaultValue={item.mail}
                         keyboardType='email-address'
                         onChangeText={(text) => this.setState(prevState => ({
                           clientMailActuel: prevState.clientMailActuel =text
                           }))
                         }
                         />
                            </View>



                            <View style={Det_ClientStyles.Test}>
                              <Image source={Location} style={Det_ClientStyles.Iconemail} />
                                <TextInput
                                style={ClientStyles.input}
                                placeholderTextColor={'#aaa69d'}
                                underlineColorAndroid='transparent'
                                value={this.state.clientAdresseActuel}
                                defaultValue={item.adresse}
                                onChangeText={(text) => this.setState(prevState => ({
                                  clientAdresseActuel: prevState.clientAdresseActuel =text
                                  }))
                                }
                                />
                            </View>



                            <View style={Det_ClientStyles.Test}>
                              <Image source={Note} style={Det_ClientStyles.Iconemail} />
                                <TextInput
                                style={ClientStyles.input}
                                placeholderTextColor={'#aaa69d'}
                                underlineColorAndroid='transparent'
                                value={this.state.clientNotesActuel}
                                defaultValue={item.notes}
                                onChangeText={(text) => this.setState(prevState => ({
                                  clientNotesActuel: prevState.clientNotesActuel =text
                                  }))
                                }
                                />
                            </View>


<View style={{flex: 1, flexDirection: 'row' ,justifyContent: 'flex-end',marginRight: 32,marginTop: 70}}>

  <View style={Det_ClientStyles.Modifier}>
    <TouchableOpacity onPress={this.modifier}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: '9%'}}>

        <Text style={Det_ClientStyles.textbtn}>Modifier</Text>

          <View>
           <Image source={Modifier} style={Det_ClientStyles.Logobtn}  />
          </View>
       </View>
     </TouchableOpacity>
  </View>

  <View style={Det_ClientStyles.Supprimer}>
   <TouchableOpacity onPress={this.supprimer}>
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: '9%'}}>
      <Text style={Det_ClientStyles.textbtn}>Supprimer</Text>
       <View>
         <Image source={Supprimer} style={Det_ClientStyles.Logobtn2}  />
       </View>
     </View>
   </TouchableOpacity>
  </View>

</View>



            </View>
       </View>
    );
  }


};
export default DetailClient;
