import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Det_ClientStyles from './Det_ClientStyles';
import User from './images/user.png';
import Tel from './images/tel.png';
import Email from './images/email.webp';
import Modifier from './images/modifier.png';
import Supprimer from './images/supprimer.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class DetailClient extends Component{
  render(){
    return(
      <View style={Det_ClientStyles.Container}>

            <View style={{marginTop: '10%'}}>

                            <View style={Det_ClientStyles.Test}>
                  <Image source={User} style={Det_ClientStyles.Iconuser} />
                  <Text style={Det_ClientStyles.Text}>Client_01</Text>
                            </View>



                            <View style={Det_ClientStyles.Test}>
                  <Image source={Tel} style={Det_ClientStyles.Icontel} />
                  <Text style={Det_ClientStyles.Text}>55 580 671</Text>
                            </View>




                            <View style={Det_ClientStyles.Test}>
                         <Image source={Email} style={Det_ClientStyles.Iconemail} />
                         <Text style={Det_ClientStyles.Text}>Client12@gmail.com</Text>
                            </View>



                            <View style={Det_ClientStyles.Test}>

                            <Text style={Det_ClientStyles.Text}>Adresse </Text>
                            </View>



                            <View style={Det_ClientStyles.Test}>

                         <Text style={Det_ClientStyles.Text}>Note </Text>
                            </View>
      <View style={{flex: 1, flexDirection: 'row' , marginTop: '35%' }}>

                          <View style={Det_ClientStyles.Modifier}>
                          <TouchableOpacity >

                                       <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: '9%'}}>

                                                   <Text style={Det_ClientStyles.textbtn}>Modifier</Text>

                                               <View>
                                       <Image source={Modifier} style={Det_ClientStyles.Logobtn}  />
                                              </View>

                                               </View>
                               </TouchableOpacity>
                                              </View>







                            <View style={Det_ClientStyles.Supprimer}>
                             <TouchableOpacity >

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
