import React, { Component } from 'react';
import {View, Text,Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import {StackNavigator} from "react-navigation";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import RNPickerSelect from 'react-native-picker-select';
import Produit from '../../Modele/produit/Produit';
import {ajouterProduit} from '../../controleur/produit/crudProduit';


 export default class AjouterProd extends Component {

   state={
        produitList: [],  //list des produit
        produitItemActuel: null, //produit actuel ajouter par le pdg
        produitcodeBarrectuel: null,
        produitNomActuel: null,
        produitDateActuel: null,
        produitHeurActuel: null,
        produitQuentiteActuel: null,
        produitFournisseurActuel: null,

      }

onProduitAjouter = (produit) => {
  console.log("Produit Ajouter!!");
  console.log(produit);
}

ajouter = () => {
this.produit=new Produit();
this.produit.code=this.state.produitItemActuel;
this.produit.codeBarre=this.state.produitcodeBarrectuel;
this.produit.nom=this.state.produitNomActuel;
this.produit.date=this.state.produitDateActuel;
this.produit.heur=this.state.produitHeurActuel;
this.produit.quentite=this.state.produitQuentiteActuel;
this.produit.fournniseur=this.state.produitFournisseurActuel;
ajouterProduit(this.produit);
};


   render(){
    return  (
      <View>

        <View><Text style={{fontSize: 17, marginLeft: '1%',marginTop: '2%', fontFamily: 'Cambria',fontWeight: '900'}}> *Ajouter au stock </Text></View>

        <View style={{alignItems: 'center', marginTop: '3%'}}>
          <TouchableOpacity>
              <Image
                source={require('./pages_images/image.png')}
                style={{height: 85,width: 90 ,marginRight: 15}}
              />
          </TouchableOpacity>
        </View>

        <View style={styles.rectangle}>
          <View  style={{alignItems: 'center'}}>
            <Text style={{color: 'white',marginTop: '2%',fontSize: 20}}> Référence de produit</Text>
          </View>
        </View>




        <View>
          <Text style={{fontSize: 17, marginTop: '5%'}}>Code:</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <TextInput
               style={{ height: 50, borderColor: 'gray', borderWidth: 0 ,marginLeft: '6%', fontSize: 20,marginTop: '10%'}}
               placeholder="Ex:0001"
               value={this.state.produitItemActuel}
               onChangeText={(text) => this.setState(prevState => ({
                 produitItemActuel: prevState.produitItemActuel =text
                 }))
               }
            />
          </View>

          <View style={{alignItems: 'center'}}>
                <TextInput
                 style={{ height: 50, borderColor: 'gray', borderWidth: 0 ,marginLeft: '10%',fontSize: 20,marginTop: '10%'}}
                 placeholder="Code à barre"
                 value={this.state.produitcodeBarrectuel}
                 onChangeText={(text) => this.setState(prevState => ({
                   produitcodeBarrectuel: prevState.produitcodeBarrectuel =text
                 }))
                  }
              />
          </View>

          <View>
            <TouchableOpacity>
                <Image
                  source={require('./pages_images/code_a_barre.png')}
                  style={{height: 85,width: 90 ,marginRight: '5%'}}
                />
            </TouchableOpacity>
          </View>

        </View>

        <View>
          <Text style={{fontSize: 17}}>Nom Du Produit:</Text>
        </View>


        <View style={{alignItems: 'center', marginRight: '5%'}}>
            <TextInput
                     style={{ height: 50, borderColor: 'gray', borderWidth: 0 ,marginLeft: '2%', fontSize: 20}}
                     placeholder="Ex:Produit1"
                     value={this.state.produitNomActuel}
                     onChangeText={(text) => this.setState(prevState => ({
                       produitNomActuel: prevState.produitNomActuel =text

                     }))
                   }
              />
        </View>


        <View style={styles.rectangle}>
          <View  style={{alignItems: 'center'}}>
            <Text style={{color: 'white',marginTop: '2%',fontSize: 20}}> Détail de Produit</Text>
          </View>
        </View>



        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>

          <View>
            <Text style={styles.detail_text}>Date</Text>
          </View>

          <View>
              <Text style={styles.detail_text}>Heur</Text>
          </View>

        </View>

        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>

          <View>
              <TextInput
                   style={{ height: 50, borderColor: 'gray', borderWidth: 0 , fontSize: 20,}}
                   placeholder="13/06/2020"
                   value={this.state.produitDateActuel}
                   onChangeText={(text) => this.setState(prevState => ({
                       produitDateActuel: prevState.produitDateActuel =text

                   }))
                 }
                   />
          </View>

          <View>
              <TextInput
               style={{ height: 50, borderColor: 'gray', borderWidth: 0 , fontSize: 20}}
               placeholder="18:00"
               value={this.state.produitHeurActuel}
               onChangeText={(text) => this.setState(prevState => ({
                  produitHeurActuel: prevState.produitHeurActuel =text
               }))
             }
               />
          </View>

        </View>

        <View>
          <Text style={{fontSize: 17}}>Quentité:</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                  <TextInput
                     style={{ height: 50, borderColor: 'gray', borderWidth: 0 , fontSize: 20}}
                     placeholder="0"
                     value={this.state.produitQuentiteActuel}
                     onChangeText={(text) => this.setState(prevState => ({
                       produitQuentiteActuel: prevState.produitQuentiteActuel =text

                     }))
                   }
                   />
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require('./pages_images/plus.png')}
                    style={{ width: 50, height: 50, marginLeft: 10,marginTop: '7%'}}
                  />
                </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Image
                      source={require('./pages_images/minus.png')}
                      style={{ width: 50, height: 50, marginLeft: 10,marginTop: '7%'}}
                    />
                  </TouchableOpacity>
                  </View>
          </View>
        </View>

        <View>
          <Text style={{fontSize: 17}}>Fournisseur:</Text>
        </View>

        <View style={{marginLeft: '25%'}}>
            <TextInput
             style={{ height: 50, borderColor: 'gray', borderWidth: 0 , fontSize: 20}}
             placeholder="Ex:Foulen"
             value={this.state.produitFournisseurActuel}
             onChangeText={(text) => this.setState(prevState => ({
               produitFournisseurActuel: prevState.produitFournisseurActuel =text

             }))
           }
           />
        </View>

        <View style={{flexDirection: 'row-reverse'}}>
          <View style={styles.circle}>

            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <View style={{alignItems: 'flex-start'}}>
                <TouchableOpacity>
                  <Image
                    source={require('./pages_images/save.png')}
                    style={{ width: 45, height: 45, marginLeft: '15%',}}
                  />
                </TouchableOpacity>
              </View>
              <View>




                <TouchableOpacity onPress={this.ajouter}  >
                  <Text style={{marginTop: '10%',marginRight: '9%',fontSize: 17}}>Enregistrer</Text>
                </TouchableOpacity>
              </View>
            </View>


          </View>

        </View>


      </View>
    )
   }
 }



 const styles = StyleSheet.create({

     rectangle: {
        width: '100%',
        height: 50,
        backgroundColor: '#6A6A6A',
        marginTop: '3%',
    },

    detail_text: {
       fontSize: 17,
       marginLeft: '5%',
       marginTop: '10%',
   },
   circle: {
    width: 200,
    height: 50,
    borderRadius: 100/2,
    borderWidth: 1,
    marginRight: '1%'
}
});
