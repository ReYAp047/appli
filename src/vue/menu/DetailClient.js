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
       nomErreur: '',
       clientMailActuel: '',
       mailErreur: '',
       clientAdresseActuel: null,
       clientNotesActuel: null,
     }

     validationNom(){
       if(this.state.clientNomActuel==""){
         this.setState({nomErreur:"Ce Champ est obligatoire"})
       }else{
         this.setState({nomErreur:""})
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

     modifier = () => {
     this.client=new Client();
     //ken el champ t3aba eb 7aja jdida ne5ouh else ne5ou le9dim
     if(this.state.clientNomActuel){
       this.client.nom=this.state.clientNomActuel;
     }else {
       this.client.nom=it.nom;
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

     if(this.state.mailErreur!="Format d'email incorrect")
     {
        this.client.tel=it.tel;
        modifierClient(this.client);
        Alert.alert("Le Client::"+it.nom+"est MODIFIER avec succès!!");
        this.props.navigation.push('Cl');
      }else {
        Alert.alert('Erreur', 'Le format du Mail est incorrect', [
          {text: 'Claire',
            color: 'red'}
        ]);
      }
     };
     supprimer=() => {
       supprimerClient(it.tel);
       Alert.alert("Le Client::"+it.nom+"est SUPPRIMER avec succès!!");
       this.props.navigation.push('Cl');
     };




  render(){
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'item');
global.it=item;
console.log(it.tel);
console.log(it.notes);
    return(
      <View style={Det_ClientStyles.Container}>

            <View >

                <View style={Det_ClientStyles.Test}>
                  <Image source={User} style={Det_ClientStyles.Iconuser} />
                  <TextInput
                  style={ClientStyles.input}
                  placeholderTextColor={'#aaa69d'}
                  underlineColorAndroid='transparent'
                  onBlur={()=>this.validationNom()}
                  defaultValue={item.nom}
                  onChangeText={(text) => this.setState(prevState => ({
                    clientNomActuel: prevState.clientNomActuel =text
                    }))
                  }
                  />
                </View>
                <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>

                <View>
                   <Text style={{color: 'red',marginLeft: "6%"}}>{this.state.nomErreur}</Text>
                </View>


                      <View style={Det_ClientStyles.Test}>
                         <Image source={Email} style={Det_ClientStyles.Iconemail} />
                         <TextInput
                         style={ClientStyles.input}
                         placeholderTextColor={'#aaa69d'}
                         underlineColorAndroid='transparent'

                         defaultValue={item.mail}
                         keyboardType='email-address'
                         onBlur={()=>this.validationMail()}
                         onChangeText={(text) => this.setState(prevState => ({
                           clientMailActuel: prevState.clientMailActuel =text
                           }))
                         }
                         />
                      </View>
                      <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>
                      <View>
                         <Text style={{color: 'red',marginLeft: "6%"}}>{this.state.mailErreur}</Text>
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
                            <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>




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
                            <View style={{width: 300,height: 1,  marginLeft: '5%', backgroundColor: '#000000'}}/>



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
