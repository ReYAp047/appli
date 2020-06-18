import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import FournisseurStyles from './FournisseurStyles';
import DetailFournisseur from './DetailFournisseur';
import AjoutFournisseur from './AjoutFournisseur';
import Call from './images/call.png';
import Mesg from './images/message-512.png';
import Add from './images/add-user.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {afficheFournisseurs} from '../../controleur/menu/crudFournisseur';

function goToDetailFournisseur(){

};
function goToAjoutFournisseur(){

};
export default function Fournisseur(){
afficheFournisseurs();
    return(
           <View>
            <View style={{marginTop: '9%'}}>
                {/*/debut fournisseur list*/}
                <FlatList  
                    data={fr}
                    renderItem={({ item }) => (

                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>

                      <View style={{flex: 4}}>
                        <TouchableOpacity  onPress={goToDetailFournisseur()}>
                          <Text style={FournisseurStyles.Text}> {item.nom} </Text>
                        </TouchableOpacity>
                      </View>

                      <View>
                        <Image source={Call} style={FournisseurStyles.Iconcall} />
                      </View>

                      <View>
                        <Image source={Mesg} style={FournisseurStyles.Iconmsg} />
                      </View>

                    </View>


                     <View>
                       <View style={{width: '100%' ,height: 1,backgroundColor: '#000000',marginTop: '1%'}}/>
                     </View>
                </View>
              )}
             />
             </View>
                 {/*fin fournisseur list*/}


               <View style={{flex: 1,flexDirection: 'row-reverse'}}>
                 <View style={{justifyContent: 'flex-end',marginBottom: 36,marginRight:'5%'}}>
                   <TouchableOpacity  onPress={goToAjoutFournisseur()}>
                    <Image source={Add} style={FournisseurStyles.Iconadd} />
                   </TouchableOpacity>
                 </View>
              </View>

          </View>


    );



};
