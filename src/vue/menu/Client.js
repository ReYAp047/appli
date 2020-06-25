import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import ClientStyles from './ClientStyles';
import DetailClient from './DetailClient';
import AjoutClient from './AjoutClient';
import Call from './images/call.png';
import Mesg from './images/message-512.png';
import Add from './images/add-user.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {afficheClients} from '../../controleur/menu/crudClient';

function goToDetailClient(){

};
function goToAjoutClient(){

};
export default function Client(){
afficheClients();
    return(
        <View>
            <View style={{marginTop: '9%'}}>
                  {/*/debut client list*/}
                  <FlatList
                      data={cl}
                      renderItem={({ item }) => (

                  <View style={{flexDirection: 'column'}}>
                      <View style={{flexDirection: 'row'}}>

                        <View style={{flex: 4}}>
                          <TouchableOpacity  onPress={goToDetailClient()}>
                            <Text style={ClientStyles.Text}> {item.nom} </Text>
                          </TouchableOpacity>
                        </View>

                        <View>
                          <Image source={Call} style={ClientStyles.Iconcall} />
                        </View>

                        <View>
                          <Image source={Mesg} style={ClientStyles.Iconmsg} />
                        </View>

                      </View>


                       <View>
                         <View style={{width: '100%' ,height: 1,backgroundColor: '#000000',marginTop: '1%'}}/>
                       </View>
                  </View>
                )}
               />
            </View>


              <View style={{position:'relative', left: 0, right: 0, bottom: -500}}>
              <Text>My fixed footer</Text>
              </View>





</View>




    );


};
