import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Det_FournisseurStyles from './Det_FournisseurStyles';
import FournisseurStyles from './FournisseurStyles';
import User from './images/user.png';
import Note from './images/note.png';
import Location from './images/location.png';
import Email from './images/email.webp';
import Modifier from './images/modifier.png';
import Supprimer from './images/supprimer.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Fournisseur from '../../Modele/fournisseur/Fournisseur';
import {modifierFournisseur} from '../../controleur/menu/crudFournisseur';
import {supprimerFournisseur} from '../../controleur/menu/crudFournisseur'
import List_Fournisseurs from './Fournisseur';
class DetailFournisseur extends Component{


  state={
       fournisseurNomActuel: null,
       nomErreur: '',
       fournisseurMailActuel: '',
       mailErreur: '',
       fournisseurAdresseActuel: null,
       fournisseurNotesActuel: null,
     }

     validationNom(){
       if(this.state.fournisseurNomActuel==""){
         this.setState({nomErreur:"Ce Champ est obligatoire"})
       }else{
         this.setState({nomErreur:""})
       }
     }


     validationMail(){
       if(this.state.fournisseurMailActuel!="")
       {const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
          if(!expression.test(String(this.state.fournisseurMailActuel).toLowerCase()))
          {
            this.setState({mailErreur:"Format d'email incorrect"})
          }else{
         this.setState({mailErreur:""})
        }}
}

     modifier = () => {
     this.fournisseur=new Fournisseur();
     //ken el champ t3aba eb 7aja jdida ne5ouh else ne5ou le9dim
     if(this.state.fournisseurNomActuel){
       this.fournisseur.nom=this.state.fournisseurNomActuel;
     }else {
       this.fournisseur.nom=itf.nom;
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

     if(this.state.mailErreur!="Format d'email incorrect")
     {
        this.fournisseur.tel=itf.tel;
        modifierFournisseur(this.fournisseur);
        Alert.alert("Le Fournisseur::"+itf.nom+"est MODIFIER avec succès!!");
        this.props.navigation.push('List_Fournisseurs');
      }else {
        Alert.alert('Erreur', 'Le format du Mail est incorrect', [
          {text: 'Claire',
            color: 'red'}
        ]);
      }
     };
     supprimer=() => {
       supprimerFournisseur(itf.tel);
       Alert.alert("Le Fournisseur::"+itf.nom+"est SUPPRIMER avec succès!!");
       this.props.navigation.push('List_Fournisseurs');
     };




  render(){
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'item');
global.itf=item;
console.log(itf.tel);
console.log(itf.notes);
    return(
      <View style={Det_FournisseurStyles.Container}>

            <View >

                <View style={Det_FournisseurStyles.Test}>
                  <Image source={User} style={Det_FournisseurStyles.Iconuser} />
                  <TextInput
                  style={FournisseurStyles.input}
                  placeholderTextColor={'#aaa69d'}
                  underlineColorAndroid='transparent'
                  onBlur={()=>this.validationNom()}
                  defaultValue={item.nom}
                  onChangeText={(text) => this.setState(prevState => ({
                    fournisseurNomActuel: prevState.fournisseurNomActuel =text
                    }))
                  }
                  />
                </View>
                <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

                <View>
                   <Text style={{color: 'red',marginLeft: "6%"}}>{this.state.nomErreur}</Text>
                </View>


                      <View style={Det_FournisseurStyles.Test}>
                         <Image source={Email} style={Det_FournisseurStyles.Iconemail} />
                         <TextInput
                         style={FournisseurStyles.input}
                         placeholderTextColor={'#aaa69d'}
                         underlineColorAndroid='transparent'

                         defaultValue={item.mail}
                         keyboardType='email-address'
                         onBlur={()=>this.validationMail()}
                         onChangeText={(text) => this.setState(prevState => ({
                           fournisseurMailActuel: prevState.fournisseurMailActuel =text
                           }))
                         }
                         />
                      </View>
                      <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>
                      <View>
                         <Text style={{color: 'red',marginLeft: "6%"}}>{this.state.mailErreur}</Text>
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
                            <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>




                            <View style={Det_FournisseurStyles.Test}>
                              <Image source={Note} style={Det_FournisseurStyles.Iconemail} />
                                <TextInput
                                style={FournisseurStyles.input}
                                placeholderTextColor={'#aaa69d'}
                                underlineColorAndroid='transparent'
                                value={this.state.fournisseurNotesActuel}
                                defaultValue={item.notes}
                                onChangeText={(text) => this.setState(prevState => ({
                                  fournisseurNotesActuel: prevState.fournisseurNotesActuel =text
                                  }))
                                }
                                />
                            </View>
                            <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>



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
