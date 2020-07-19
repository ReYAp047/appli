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
import List_Produits from './List_Produits';
import {afficheProduits} from '../../controleur/produit/crudProduit';
import {nombreProduits} from '../../controleur/produit/crudProduit';
import {modifierProduit} from '../../controleur/produit/crudProduit';
import Produit from '../../Modele/produit/Produit';
export default class DetailProduit extends Component{
  state={
       produitNomActuel: '',
       nomErreur: '',
       produitPrixActuel: '',
       prixErreur:'',
       produitQuentiteActuel: '',
       quentiteErreur: 'bien',
       produitFournisseurActuel: '',
       fournisseurErreur: '',
       resourcePath: {},//pour le lien du photo
     }
     modifierEnter = () => {
       let x = parseInt(this.state.produitQuentiteActuel, 10);
       let y = parseInt(pr.quentite, 10);
       if (x) {
         x+=y;
         pr.quentite=x;
       }
       console.log(pr.prix);
       if(this.state.produitPrixActuel)
       {
         pr.prix=this.state.produitPrixActuel;
         console.log(pr.prix);
       }
       if(x ||this.state.produitPrixActuel ){
         modifierProduit(pr);
         Alert.alert('Validation', 'Produit Modifier', [
           {text: 'Claire',
             color: 'red'}
         ]);
         this.produitQuentiteActuel.clear()
         this.props.navigation.push('List_Produits');
       }
     }
     modifierSortie = () => {
       let x = parseInt(this.state.produitQuentiteActuel, 10);
       let y = parseInt(pr.quentite, 10);
       if (x && y>=x) {
         y-=x;
         pr.quentite=y;
       }
       console.log(pr.prix);
       if(this.state.produitPrixActuel)
       {
         pr.prix=this.state.produitPrixActuel;
         console.log(pr.prix);
       }
       if(x ||this.state.produitPrixActuel ){
         modifierProduit(pr);
         Alert.alert('Validation', 'Produit Modifier', [
           {text: 'Claire',
             color: 'red'}
         ]);
         this.produitQuentiteActuel.clear()
         this.props.navigation.push('List_Produits');
       }
     }
      save = () => {
        if(this.state.produitNomActuel){
          pr.nom=this.state.produitNomActuel;
          modifierProduit(pr);
          Alert.alert('Validation', 'Nom Produit Modifier', [
            {text: 'Claire',
              color: 'red'}
          ]);
          this.produitQuentiteActuel.clear()
          this.props.navigation.push('List_Produits');
        }
      }

  render(){
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'item');
global.pr=item;
return (
          <View>
            <View style={{flexDirection: 'row',marginTop: "10%"}}>
              <View style={{flex: 2,marginLeft: "5%",marginTop: "6%"}}>
              <Image
                source={{ uri: item.lien }}
                style={{ width: 120, height: 130,marginRight: 15 }}
              />
              </View>
              <View style={{flexDirection: 'column',flex: 4}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop: "5%",marginLeft: "5%"}}>
                  <View style={{marginTop: "5%"}}>
                    <Text>Nom du produit</Text>
                  </View>
                  <View>
                  <TextInput
                           style={{ height: 50, borderColor: 'gray', borderWidth: 0 ,marginLeft: '2%', fontSize: 20}}
                           placeholder="Ex:Produit1"
                           defaultValue={pr.nom}
                           onChangeText={(text) => this.setState(prevState => ({
                             produitNomActuel: prevState.produitNomActuel =text

                           }))
                         }
                         ref={input => { this.produitNomActuel = input }}
                    />
                  </View>
                </View>

                <View style={{marginTop: "9%",marginLeft: "4%",justifyContent: 'space-between'}}>
                  <View style={{flexDirection: 'row',marginBottom: "11%"}}>
                    <View>
                      <Text> Quentité</Text>
                    </View>
                    <View style={{marginLeft: "20%"}}>
                      <Text style={{fontWeight: 'bold',fontSize: 16}}> {pr.quentite}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row',marginRight: "23%"}}>
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
              <View style={{flexDirection: 'column',marginLeft: "9%",marginRight: "5%"}}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text>Code à barre </Text>
                  </View>
                  <View>
                    <Image
                      source={require('./pages_images/code_a_barre.png')}
                      style={{height: 30,width: 40}}
                    />
                  </View>
                </View>
                <View style={{marginTop: "5%"}}>
                  <Text style={{fontWeight: 'bold',fontSize: 15}}>{item.codeBarre} </Text>
                </View>
              </View>
            </View>



            <View style={{  width: "100%",height: 35,backgroundColor: '#000000',marginTop: "30%"}}>
              <View style={{alignItems: 'center',marginTop: "1%"}}>
                <Text style={{color: "white"}}>Gestion du produit</Text>
              </View>
            </View>

          <TouchableOpacity onPress={this.modifierEnter}>
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

            <TouchableOpacity onPress={this.modifierSortie}>
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
            </TouchableOpacity>


            </View>
          </TouchableOpacity>
            <View style={{marginTop: "7%",flexDirection: 'row'}}>
              <View style={{marginLeft: "3%"}}>
                <Text>1x</Text>
              </View>
              <View style={{marginLeft: "5%"}}>
              <TextInput
                       style={{ height: 50, borderColor: 'gray', borderWidth: 0 ,marginLeft: '2%', fontSize: 20}}
                       placeholder="Quantité"
                       keyboardType='numeric'
                       onChangeText={(text) => this.setState(prevState => ({
                         produitQuentiteActuel: prevState.produitQuentiteActuel =text

                       }))
                     }
                     ref={input => { this.produitQuentiteActuel = input }}
                />
              </View>
              <View style={{marginLeft: "20%"}}>
              <TextInput
                       style={{ height: 50, borderColor: 'gray', borderWidth: 0 ,marginLeft: '2%', fontSize: 20}}
                       placeholder="Prix"
                       keyboardType='numeric'
                       onChangeText={(text) => this.setState(prevState => ({
                         produitPrixActuel: prevState.produitPrixActuel =text

                       }))
                     }
                     ref={input => { this.produitPrixActuel = input }}
                />
              </View>
            </View>

            <View style={{flexDirection: 'row-reverse'}}>
            <TouchableOpacity onPress={this.save}>
              <Image
                source={require('./pages_images/save.png')}
                style={{height: 60,width: 80}}
              />
            </TouchableOpacity>
            </View>

          </View>

);
}







}
