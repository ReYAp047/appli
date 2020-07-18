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
import Cl from './Client';
import {ajouterClient} from '../../controleur/menu/crudClient';
import Client from '../../Modele/client/Client';
import Clientjs from './Client';
  class AjoutClient  extends Component{
    state={
         clientNomActuel: '',
         nomErreur: '',
         clientTelActuel: '',
         telErreur: '',
         clientMailActuel: '',
         mailErreur: '',
         clientAdresseActuel: '',
         clientNotesActuel: '',
         expression:'',

       }
       validationNom(){
         if(this.state.clientNomActuel==""){
           this.setState({nomErreur:"Ce Champ est obligatoire"})
         }else{
           this.setState({nomErreur:""})
         }
       }

       validationTel(){
         if(this.state.clientTelActuel==""){
           this.setState({telErreur:"Ce Champ est obligatoire"})
         }else{
           this.setState({telErreur:""})
         }
       }
       validationMail(){
         if(this.state.clientMailActuel!="")
         {const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            if(!expression.test(String(this.state.clientMailActuel).toLowerCase()))
            {
              this.setState({mailErreur:"Format d'email incorrect"})
            }else{
           this.setState({mailErreur:""})
          }}
}


       ajouter = () => {
         console.log(this.state.clientTelActuel.length);
         if(this.state.clientNomActuel!="" && this.state.clientTelActuel.length==8&&this.state.mailErreur!="Format d'email incorrect")
         {
           this.client=new Client(this.state.clientAdresseActuel,
                                  this.state.clientMailActuel,
                                  this.state.clientNomActuel,
                                  this.state.clientNotesActuel,
                                  this.state.clientTelActuel);
            ajouterClient(this.client);
            Alert.alert("Le Client::"+ this.client.nom+"est Ajouter avec succès!!");
            this.clientNomActuel.clear();
            this.clientTelActuel.clear();
            this.clientMailActuel.clear();
            this.clientAdresseActuel.clear();
            this.clientNotesActuel.clear();
            this.props.navigation.push('Cl');
          }else if (this.state.clientNomActuel=="") {
            Alert.alert('Erreur', 'Le Nom est obligtoire', [
              {text: 'Claire',
                color: 'red'}
            ]);
          }else if (this.state.clientTelActuel.Length!=8){
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
               <View style={ClientStyles.Test}>
             <TextInput
             style={ClientStyles.input}
             placeholder={'Nom Client'}
             ref={input => { this.clientNomActuel = input }}
             placeholderTextColor={'#aaa69d'}
             underlineColorAndroid='transparent'
             value={this.state.clientNomActuel}
             onBlur={()=>this.validationNom()}
             onChangeText={(text) => this.setState(prevState => ({
               clientNomActuel: prevState.clientNomActuel =text
               }))
             }
             />
              <Image source={User} style={ClientStyles.Iconuser} />
         </View>
         <View>
            <Text style={{color: 'red',marginLeft: "6%"}}>{this.state.nomErreur}</Text>
         </View>
         <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

         <View style={ClientStyles.Test}>
               <TextInput
                  style={ClientStyles.input}
                  ref={input => { this.clientTelActuel = input }}
                  placeholder={'Telephone'}
                  maxLength={8}
                  keyboardType='numeric'
                  placeholderTextColor={'#aaa69d'}
                  underlineColorAndroid='transparent'
                  value={this.state.clientTelActuel}
                  onBlur={()=>this.validationTel()}
                  onChangeText={(text) => this.setState(prevState => ({
                    clientTelActuel: prevState.clientTelActuel =text
                    }))
                  }
               />

               <Image source={Tel} style={ClientStyles.Icontel} />
          </View>
          <View>
             <Text style={{color: 'red',marginLeft: "6%"}}>{this.state.telErreur}</Text>
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
              onBlur={()=>this.validationMail()}
              onChangeText={(text) => this.setState(prevState => ({
                clientMailActuel: prevState.clientMailActuel =text
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

      <View style={{flexDirection: 'row-reverse',marginLeft: "80%"}}>
        <TouchableOpacity onPress={this.ajouter}>
          <Image source={Enregistrer} style={ClientStyles.Iconenreg} />
        </TouchableOpacity>
      </View>

       </View>
    );
  }
};
export default AjoutClient;
