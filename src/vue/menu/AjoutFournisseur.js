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
import FournisseurStyles from './FournisseurStyles';
import User from './images/user.png';
import Tel from './images/tel.png';
import Email from './images/email.webp';
import Enregistrer from './images/enregistrer.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import List_Fournisseurs from './Fournisseur';
import {ajouterFournisseur} from '../../controleur/menu/crudFournisseur';
import Fournisseur from '../../Modele/fournisseur/Fournisseur';
import Fournisseurjs from './Fournisseur';
  class AjoutFournisseur  extends Component{
    state={
         fournisseurNomActuel: '',
         nomErreur: '',
         fournisseurTelActuel: '',
         telErreur: '',
         fournisseurMailActuel: '',
         mailErreur: '',
         fournisseurAdresseActuel: '',
         fournisseurNotesActuel: '',
         expression:'',

       }
       validationNom(){
         if(this.state.fournisseurNomActuel==""){
           this.setState({nomErreur:"Ce Champ est obligatoire"})
         }else{
           this.setState({nomErreur:""})
         }
       }

       validationTel(){
         if(this.state.fournisseurTelActuel==""){
           this.setState({telErreur:"Ce Champ est obligatoire"})
         }else{
           this.setState({telErreur:""})
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


       ajouter = () => {
         console.log(this.state.fournisseurTelActuel.length);
         if(this.state.fournisseurNomActuel!="" && this.state.fournisseurTelActuel.length==8&&this.state.mailErreur!="Format d'email incorrect")
         {
           this.fournisseur=new Fournisseur(this.state.fournisseurAdresseActuel,
                                  this.state.fournisseurMailActuel,
                                  this.state.fournisseurNomActuel,
                                  this.state.fournisseurNotesActuel,
                                  this.state.fournisseurTelActuel);
            ajouterFournisseur(this.fournisseur);
            Alert.alert("Le Fournisseur::"+ this.fournisseur.nom+"est Ajouter avec succès!!");
            this.props.navigation.push('List_Fournisseurs');
          }else if (this.state.fournisseurNomActuel=="") {
            Alert.alert('Erreur', 'Le Nom est obligtoire', [
              {text: 'Claire',
                color: 'red'}
            ]);
          }else if (this.state.fournisseurTelActuel.Length!=8){
            Alert.alert('Erreur', 'Verifier votre numero de télephone0', [
              {text: 'Claire',
                color: 'red'}
            ]);
          }else {
            Alert.alert('Erreur', 'Le format du Mail est incorrect', [
              {text: 'Claire',
                color: 'red'}
            ]);
          }

       };


  render(){

    return(

      <View style={{flex: 1}}>

        <View style={{marginTop: '20%'}}>
               <View style={FournisseurStyles.Test}>
             <TextInput
             style={FournisseurStyles.input}
             placeholder={'Nom Fournisseur'}
             ref={input => { this.fournisseurNomActuel = input }}
             placeholderTextColor={'#aaa69d'}
             underlineColorAndroid='transparent'
             value={this.state.fournisseurNomActuel}
             onBlur={()=>this.validationNom()}
             onChangeText={(text) => this.setState(prevState => ({
               fournisseurNomActuel: prevState.fournisseurNomActuel =text
               }))
             }
             />
              <Image source={User} style={FournisseurStyles.Iconuser} />
         </View>
         <View>
            <Text style={{color: 'red',marginLeft: "6%"}}>{this.state.nomErreur}</Text>
         </View>
         <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

         <View style={FournisseurStyles.Test}>
               <TextInput
                  style={FournisseurStyles.input}
                  ref={input => { this.FournisseurTelActuel = input }}
                  placeholder={'Telephone'}
                  maxLength={8}
                  keyboardType='numeric'
                  placeholderTextColor={'#aaa69d'}
                  underlineColorAndroid='transparent'
                  value={this.state.fournisseurTelActuel}
                  onBlur={()=>this.validationTel()}
                  onChangeText={(text) => this.setState(prevState => ({
                    fournisseurTelActuel: prevState.fournisseurTelActuel =text
                    }))
                  }
               />

               <Image source={Tel} style={FournisseurStyles.Icontel} />
          </View>
          <View>
             <Text style={{color: 'red',marginLeft: "6%"}}>{this.state.telErreur}</Text>
          </View>
          <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

          <View style={FournisseurStyles.Test}>
            <TextInput
              style={FournisseurStyles.input}
              ref={input => { this.fournisseurMailActuel = input }}
              placeholder={'E-mail'}
              keyboardType='email-address'
              placeholderTextColor={'#aaa69d'}
              underlineColorAndroid='transparent'
              value={this.state.fournisseurMailActuel}
              onBlur={()=>this.validationMail()}
              onChangeText={(text) => this.setState(prevState => ({
                fournisseurMailActuel: prevState.fournisseurMailActuel =text
                }))
              }
              />

          </View>
          <View>
             <Text style={{color: 'red',marginLeft: "6%"}}>{this.state.mailErreur}</Text>
          </View>
          <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

          <View>
             <TextInput
             style={FournisseurStyles.input}
             ref={input => { this.fournisseurAdresseActuel = input }}
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
             ref={input => { this.fournisseurNotesActuel = input }}
             placeholder={'Note'}
             multiline
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

      <View style={{flexDirection: 'row-reverse',marginLeft: "80%"}}>
        <TouchableOpacity onPress={this.ajouter}>
          <Image source={Enregistrer} style={FournisseurStyles.Iconenreg} />
        </TouchableOpacity>
      </View>

       </View>
    );
  }
};
export default AjoutFournisseur;
