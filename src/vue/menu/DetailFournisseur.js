import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Det_FournisseurStyles from './Det_FournisseurStyles';
import User from './images/user.png';
import Tel from './images/tel.png';
import Email from './images/email.webp';
import Modifier from './images/modifier.png';
import Supprimer from './images/supprimer.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class DetailFournisseur  extends Component{
  render(){
    return(
      <View style={Det_FournisseurStyles.Container}>

            <View style={{marginTop: '10%'}}>

                            <View style={Det_FournisseurStyles.Test}>
                  <Image source={User} style={Det_FournisseurStyles.Iconuser} />
                  <Text style={Det_FournisseurStyles.Text}>Fournisseur_01</Text>
                            </View>



                            <View style={Det_FournisseurStyles.Test}>
                  <Image source={Tel} style={Det_FournisseurStyles.Icontel} />
                  <Text style={Det_FournisseurStyles.Text}>50190123</Text>
                            </View>




                            <View style={Det_FournisseurStyles.Test}>
                         <Image source={Email} style={Det_FournisseurStyles.Iconemail} />
                         <Text style={Det_FournisseurStyles.Text}>Fournisseur15@gmail.com</Text>
                            </View>



                            <View style={Det_FournisseurStyles.Test}>

                            <Text style={Det_FournisseurStyles.Text}>Adresse </Text>
                            </View>



                            <View style={Det_FournisseurStyles.Test}>

                         <Text style={Det_FournisseurStyles.Text}>Note </Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row' , marginTop: '35%' }}>


                          <View style={Det_FournisseurStyles.Modifier}>
                          <TouchableOpacity >

                                       <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>

                                                   <Text style={Det_FournisseurStyles.textbtn}>Modifier</Text>

                                               <View>
                                       <Image source={Modifier} style={Det_FournisseurStyles.Logobtn}  />
                                              </View>

                                               </View>
                               </TouchableOpacity>
                                              </View>







                            <View style={Det_FournisseurStyles.Supprimer}>
                             <TouchableOpacity >

                           <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>

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
