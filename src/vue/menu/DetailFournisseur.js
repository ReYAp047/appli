import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import FournisseurStyles from './FournisseurStyles';
import Det_FournisseurStyles from './Det_FournisseurStyles';
import User from './images/user.png';
import Tel from './images/tel.png';
import Email from './images/email.webp';
import Modifier from './images/modifier.png';
import Supprimer from './images/supprimer.png';
import Note from './images/note.png';
import Location from './images/location.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Fournisseur from './Fournisseur';
import {modifierFournisseur} from '../../controleur/menu/crudFournisseur';
import {supprimerFournisseur} from '../../controleur/menu/crudFournisseur';

class DetailFournisseur  extends Component{


  state={
       fournisseurNomActuel: null,
       fournisseurTelActuel: null,
       fournisseurMailActuel: null,
       fournisseurAdresseActuel: null,
       fournisseurNotesActuel: null,
       fournisseurCodeActuel : null,

     }

     modifier = () => {
       console.log("je suis dans modifier fournisseur");
     this.fournisseur=new Fournisseur();

     if(this.state.fournisseurNomActuel){
       this.fournisseur.nom=this.state.fournisseurNomActuel;
     }else {
       this.fournisseur.nom=itf.nom;
     }

     if(this.state.fournisseurTelActuel){
       this.fournisseur.tel=this.state.fournisseurTelActuel;
     }else {
       this.fournisseur.tel=itf.tel;
     }

     if(this.state.fournisseurMailActuel){
       this.fournisseur.mail=this.state.fournisseurMailActuel;
     }else {
       this.fournisseur.mail=itf.mail;
     }


     if(this.state.fournisseurAdresseActuel){
       this.fournisseur.adresse=this.state.fournisseurAdresseActuel;
     }else {
       this.fournisseur.adresse=itf.adresse;
     }


     if(this.state.fournisseurNotesActuel){
       this.fournisseur.notes=this.state.fournisseurNotesActuel;
     }else {
       this.fournisseur.notes=itf.notes;
     }


     if(this.state.fournisseurCodeActuel){
       this.fournisseur.code=this.state.fournisseurCodeActuel;
     }else {
       this.fournisseur.code=itf.code;
     }



     modifierFournisseur(this.fournisseur);
     };
     supprimer=() => {
       supprimerFournisseur(itf.tel);
       Alert.alert("Le Fournisseur::"+itf.nom+"est supprimé avec succès!!");
       this.props.navigation.push('Fournisseur');
     };


  render(){
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'item');
    global.itf=item;
    return(
      <View style={Det_FournisseurStyles.Container}>

            <View >

             <View style={Det_FournisseurStyles.Test}>
                  <Image source={User} style={Det_FournisseurStyles.Iconuser} />
                  <TextInput
                  style={FournisseurStyles.input}
                  placeholderTextColor={'#aaa69d'}
                  underlineColorAndroid='transparent'
                  value={this.state.fournisseurNomActuel}
                  defaultValue={item.nom}
                  onChangeText={(text) => this.setState(prevState => ({
                    fournisseurNomActuel: prevState.fournisseurNomActuel =text
                    }))
                  }
                  />

                            </View>



                            <View style={Det_FournisseurStyles.Test}>
                  <Image source={Tel} style={Det_FournisseurStyles.Icontel} />
                    <TextInput
                    style={FournisseurStyles.input}
                    placeholderTextColor={'#aaa69d'}
                    underlineColorAndroid='transparent'
                    value={this.state.fournisseurTelActuel}
                    defaultValue={item.tel}
                    keyboardType='numeric'
                    onChangeText={(text) => this.setState(prevState => ({
                      fournisseurTelActuel: prevState.fournisseurTelActuel =text
                      }))
                    }
                    />
                            </View>




                            <View style={Det_FournisseurStyles.Test}>
                         <Image source={Email} style={Det_FournisseurStyles.Iconemail} />
                         <TextInput
                         style={FournisseurStyles.input}
                         placeholderTextColor={'#aaa69d'}
                         keyboardType='email-address'
                         underlineColorAndroid='transparent'
                         value={this.state.fournisseurMailActuel}
                         defaultValue={item.mail}
                         onChangeText={(text) => this.setState(prevState => ({
                           fournisseurMailActuel: prevState.fournisseurMailActuel =text
                           }))
                         }
                         />
                            </View>



                            <View style={Det_FournisseurStyles.Test}>
                              <Image source={Location} style={Det_FournisseurStyles.Iconemail} />
                                <TextInput
                                style={FournisseurStyles.input}
                                placeholderTextColor={'#aaa69d'}
                                underlineColorAndroid='transparent'
                                value={this.state.fournisseurAdresseActuel}
                                defaultValue={item.adresse}
                                onChangeText={(text) => this.setState(prevState => ({
                                  fournisseurAdresseActuel: prevState.fournisseurAdresseActuel =text
                                  }))
                                }
                                />
                            </View>



                            <View style={Det_FournisseurStyles.Test}>
                              <Image source={Note} style={Det_FournisseurStyles.Iconemail} />
                                <TextInput
                                style={FournisseurStyles.input}
                                placeholderTextColor={'#aaa69d'}
                                value={this.state.fournisseurNotesActuel}
                                defaultValue={item.notes}
                                underlineColorAndroid='transparent'
                                value={item.notes}
                                onChangeText={(text) => this.setState(prevState => ({
                                  fournisseurNotesActuel: prevState.fournisseurNotesActuel =text
                                  }))
                                }
                                />
                            </View>


<View style={{flex: 1, flexDirection: 'row' ,justifyContent: 'flex-end',marginRight: 32,marginTop: 70}}>

  <View style={Det_FournisseurStyles.Modifier}>
    <TouchableOpacity onPress={this.modifier}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: '9%'}}>

        <Text style={Det_FournisseurStyles.textbtn}>Modifier</Text>

          <View>
           <Image source={Modifier} style={Det_FournisseurStyles.Logobtn}  />
          </View>
       </View>
     </TouchableOpacity>
  </View>

  <View style={Det_FournisseurStyles.Supprimer}>
   <TouchableOpacity onPress={this.supprimer}>
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: '9%'}}>
      <Text style={Det_FournisseurStyles.textbtn}>Supprimer</Text>
       <View>
         <Image source={Supprimer} style={Det_FournisseurStyles.Logobtn2}  />
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
export default DetailFournisseur;
