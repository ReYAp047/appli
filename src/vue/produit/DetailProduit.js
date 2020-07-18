import React, { Component, useState, useEffect } from 'react';
import { StyleSheet,
  View,
  Text,Image,
  TouchableOpacity,
  FlatList,
  Alert,
  TextInput,
  TouchableWithoutFeedback } from 'react-native';
import { Searchbar } from 'react-native-paper';
import _ from 'lodash';
import {createAppContainer, DrawerItems,StackNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import AjouterProd from './AjouterProd';
import {afficheProduits} from '../../controleur/produit/crudProduit';
import {nombreProduits} from '../../controleur/produit/crudProduit';
export default class DetailProduit extends Component{
  render(){
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'item');
global.pr=item;
return (
          <View>
            <View style={{flexDirection: 'row',marginTop: "10%"}}>
              <View style={{flex: 2,marginLeft: "5%"}}>
                <Image
                  source={require('./pages_images/produit_icone.png')}
                  style={{height: 130,width: 130, }}
                />
              </View>
              <View style={{flexDirection: 'column',flex: 4}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop: "5%",marginLeft: "5%"}}>
                  <View>
                    <Text>Nom du produit</Text>
                  </View>
                  <View>
                    <Text style={{marginRight: "20%",  fontWeight: 'bold',  fontSize: 16}}>{item.nom}</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row',marginTop: "9%",marginLeft: "10%",justifyContent: 'space-between'}}>
                  <View style={{flexDirection: 'column'}}>
                    <View>
                      <Text> Quentité</Text>
                    </View>
                    <View style={{marginLeft: "20%"}}>
                      <Text style={{fontWeight: 'bold',fontSize: 16}}> {item.quentite}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'column',marginRight: "23%"}}>
                    <View>
                      <Text> Prix/Pièce</Text>
                    </View>
                    <View style={{marginLeft: "20%"}}>
                      <Text style={{fontWeight: 'bold',fontSize: 16}}> {item.prix}dt</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={{marginTop: "10%",flexDirection: 'row',justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column',marginLeft: "9%"}}>
                <View>
                  <Text>Code Interne </Text>
                </View>
                <View style={{marginLeft: "20%"}}>
                  <Text style={{fontWeight: 'bold',fontSize: 15,marginTop: "7%"}}>{item.code} </Text>
                </View>
              </View>

              <View style={{flexDirection: 'column',marginLeft: "9%",marginRight: "5%"}}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text>Code à barre </Text>
                  </View>
                  <View>
                    <Image
                      source={require('./pages_images/code_a_barre.png')}
                      style={{height: 23,width: 60}}
                    />
                  </View>
                </View>
                <View style={{marginTop: "5%"}}>
                  <Text style={{fontWeight: 'bold',fontSize: 15}}>{item.codeBarre} </Text>
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'column',marginTop: "9%",marginLeft: "9%"}}>
                <View>
                  <Text>{item.description}</Text>
                </View>
                <View>
                  <TextInput
                      multiline={true}
                      numberOfLines={4}
                      placeholder="Ici est la description du produit"
                   />
                </View>
            </View>

            <View style={{  width: "100%",height: 35,backgroundColor: '#000000'}}>
              <View style={{alignItems: 'center',marginTop: "1%"}}>
                <Text style={{color: "white"}}>Gestion du produit</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row',marginTop: "5%",justifyContent: 'space-between',marginRight: "10%"}}>
              <View style={{marginLeft: "11%",flexDirection: 'row',width: 120,height: 60,borderRadius: 15/2,backgroundColor: '#009F00',}}>
                <View style={{marginTop: "8%",marginLeft: "5%"}}>
                  <Text style={{color: "white",marginTop: "13%",marginLeft: "6%",fontWeight: 'bold',}}>Entrée</Text>
                </View>
                <View style={{marginTop: "12%",marginLeft: "12%"}}>
                  <Image
                    source={require('./pages_images/ent.png')}
                    style={{height: 30,width: 30 ,marginLeft: "5%"}}
                  />
                </View>
              </View>


              <View style={{marginLeft: "5%",flexDirection: 'row',width: 120,height: 60,borderRadius: 15/2,backgroundColor: '#FF0000',}}>
                <View style={{marginTop: "8%",marginLeft: "5%"}}>
                  <Text style={{color: "white",marginTop: "13%",marginLeft: "6%",fontWeight: 'bold',}}>Sortie</Text>
                </View>
                <View style={{marginTop: "12%",marginLeft: "12%"}}>
                  <Image
                    source={require('./pages_images/sor.png')}
                    style={{height: 30,width: 30 ,marginLeft: "5%"}}
                  />
                </View>
              </View>



            </View>

            <View style={{marginTop: "7%",flexDirection: 'row'}}>
              <View>
                <Text>1x</Text>
              </View>
              <View style={{marginLeft: "5%"}}>
              <TextInput
                 style={{ height: 50, borderColor: 'gray', borderWidth: 0 ,marginLeft: '6%', fontSize: 20,marginTop: '10%'}}
                 placeholder="Quentité"
              />
              </View>
              <View style={{marginLeft: "20%"}}>
              <TextInput
                 style={{ height: 50, borderColor: 'gray', borderWidth: 0 ,marginLeft: '6%', fontSize: 20,marginTop: '10%'}}
                 placeholder="Prix"
              />
              </View>
            </View>

            <View style={{flexDirection: 'row-reverse'}}>
              <Image
                source={require('./pages_images/save.png')}
                style={{height: 60,width: 80}}
              />
            </View>

          </View>

);
}







}
