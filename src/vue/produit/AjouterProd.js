import React, { Component } from 'react';
import {View, Text,Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import {createAppContainer, DrawerItems,StackNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import RNPickerSelect from 'react-native-picker-select';
import Produit from '../../Modele/produit/Produit';
import {afficheProduits} from '../../controleur/produit/crudProduit';
import {nombreProduits} from '../../controleur/produit/crudProduit';
import {ajouterProduit} from '../../controleur/produit/crudProduit';
import List_Produits from './List_Produits';
import ImagePicker from 'react-native-image-picker';
import Counter from "react-native-counters";

 export default class AjouterProd extends Component {

   state={
        produitList: [],  //list des produit
        produitItemActuel: '', //id du pdg
        produitcodeBarrectuel: '',
        codeErreur :'',
        produitNomActuel: '',
        nomErreur: '',
        produitPrixActuel: '',
        prixErreur:'',
        produitQuentiteActuel: 0,
        quentiteErreur: '',
        produitFournisseurActuel: '',
        fournisseurErreur: '',
        resourcePath: {},//pour le lien du photo
      }
      validationCode(){
        if(this.state.produitcodeBarrectuel==""){
          this.setState({codeErreur:"Le code à barre est obligatoire"})
        }else{
          this.setState({codeErreur:""})
        }
      }

      validationNom(){
        if(this.state.produitNomActuel==""){
          this.setState({nomErreur:"Le nom est obligatoire"})
        }else{
          this.setState({nomErreur:""})
        }
      }
      validationPrix(){
        if(this.state.produitPrixActuel==""){
          this.setState({prixErreur:"Le prix est obligatoire"})
        }else{
          this.setState({prixErreur:""})
        }
      }
      validationQuantite(){
        if(this.state.produitQuentiteActuel==""){
          this.setState({quentiteErreur:"La quantité est obligatoire"})
        }else{
          this.setState({quentiteErreur:""})
        }
      }
      validationFournisseur(){
        if(this.state.produitFournisseurActuel==""){
          this.setState({fournisseurErreur:"Le nom du fournisseur est obligatoire"})
        }else{
          this.setState({fournisseurErreur:""})
        }
      }



      selectFile = () => {
        var options = {
          title: 'Select Image',

          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };

        ImagePicker.showImagePicker(options, res => {
          console.log('Response = ', res);

          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else {
            let source = res;
            this.setState({
              resourcePath: source,
            });
          }
        });
      };



plus = () => {
  let x = parseInt(this.state.produitQuentiteActuel, 10);
  x+=1;
  this.state.produitQuentiteActuel=x;
  console.log(this.state.produitQuentiteActuel);
};

min = () => {
  let x = parseInt(this.state.produitQuentiteActuel, 10);
  x-=1;
  this.state.produitQuentiteActuel=x;
  console.log(this.state.produitQuentiteActuel);
};

ajouter = () => {
  this.state.produitItemActuel="pdg2020";
this.produit=new Produit(this.state.produitItemActuel,
                        this.state.produitcodeBarrectuel,
                        this.state.produitQuentiteActuel,
                        this.state.produitNomActuel,
                        this.state.produitPrixActuel,
                        this.state.produitFournisseurActuel,
                        this.state.resourcePath.uri);
  if(this.state.produitItemActuel
      && this.state.produitcodeBarrectuel
      && this.state.produitNomActuel
      && this.state.produitPrixActuel
      && this.state.produitQuentiteActuel
      && this.state.produitFournisseurActuel
      && this.state.resourcePath.uri)
      {
        ajouterProduit(this.produit);
        Alert.alert("Le Produit :"+ this.produit.nom+"est Ajouter avec succès!!");
        this.props.navigation.push('List_Produits');

      }else if (this.state.resourcePath.uri==null) {
        Alert.alert('Erreur', 'Ajouter une image pour le produit', [
          {text: 'Claire',
            color: 'red'}
        ]);
      }else if (this.state.produitcodeBarrectuel=='') {
        Alert.alert('Erreur', 'Le Code à barre est obligtoire', [
          {text: 'Claire',
            color: 'red'}
        ]);
      }else if (this.state.produitNomActuel=='') {
        Alert.alert('Erreur', 'Le Nom du produit est obligtoire', [
          {text: 'Claire',
            color: 'red'}
        ]);
      }else if (this.state.produitPrixActuel=='') {
        Alert.alert('Erreur', 'Le Prix est obligtoire', [
          {text: 'Claire',
            color: 'red'}
        ]);
      }else if (this.state.produitQuentiteActuel==0) {
        Alert.alert('Erreur', 'La Quentité est obligtoire', [
          {text: 'Claire',
            color: 'red'}
        ]);
      }else {
        Alert.alert('Erreur', 'Le Fournisseur est obligtoire', [
          {text: 'Claire',
            color: 'red'}
        ]);
      }


};


   render(){
     const image =     <View>
                         <TouchableOpacity onPress={this.selectFile}>
                           <Image
                             source={{ uri: this.state.resourcePath.uri }}
                             style={{ width: 90, height: 85,marginRight: 15 }}
                           />
                         </TouchableOpacity>
                       </View>;

    const select =     <View>
                         <TouchableOpacity onPress={this.selectFile}  >
                            <Image
                              source={require('./pages_images/image.png')}
                              style={{height: 85,width: 90 ,marginRight: 15}}
                            />
                          </TouchableOpacity>
                       </View>;

    return  (
      <View>

        <View><Text style={{fontSize: 17, marginLeft: '1%',marginTop: '2%', fontFamily: 'Cambria',fontWeight: '900'}}> *Ajouter au stock </Text></View>

        <View style={{alignItems: 'center', marginTop: '3%'}}>
          {this.state.resourcePath.uri ? image : select}
        </View>

        <View style={styles.rectangle}>
          <View  style={{alignItems: 'center'}}>
            <Text style={{color: 'white',marginTop: '2%',fontSize: 20}}> Référence de produit</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row',marginLeft: "30%"}}>
          <View style={{alignItems: 'center'}}>
                <TextInput
                 style={{ height: 50, borderColor: 'gray', borderWidth: 0 ,marginLeft: '10%',fontSize: 20,marginTop: '10%'}}
                 placeholder="Code à barre"
                 keyboardType='numeric'
                 value={this.state.produitcodeBarrectuel}
                  onBlur={()=>this.validationCode()}
                 onChangeText={(text) => this.setState(prevState => ({
                   produitcodeBarrectuel: prevState.produitcodeBarrectuel =text
                 }))
                  }
                  ref={input => { this.produitcodeBarrectuel = input }}
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
           <Text style={{color: 'red',marginLeft: "35%"}}>{this.state.codeErreur}</Text>
        </View>

        <View>
          <Text style={{fontSize: 17}}>Nom Du Produit:</Text>
        </View>


        <View style={{alignItems: 'center', marginRight: '5%'}}>
            <TextInput
                     style={{ height: 50, borderColor: 'gray', borderWidth: 0 ,marginLeft: '2%', fontSize: 20}}
                     placeholder="Ex:Produit1"
                     value={this.state.produitNomActuel}
                      onBlur={()=>this.validationNom()}
                     onChangeText={(text) => this.setState(prevState => ({
                       produitNomActuel: prevState.produitNomActuel =text

                     }))
                   }
                   ref={input => { this.produitNomActuel = input }}
              />
        </View>
        <View>
           <Text style={{color: 'red',marginLeft: "35%"}}>{this.state.nomErreur}</Text>
        </View>


        <View style={styles.rectangle}>
          <View  style={{alignItems: 'center'}}>
            <Text style={{color: 'white',marginTop: '2%',fontSize: 20}}> Détail de Produit</Text>
          </View>
        </View>



        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginTop: 10,marginRight: 5}}>
              <Text style={{fontSize: 17}}>Quentité:</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{alignItems: 'center'}}>
                    <TextInput
                       style={{ height: 50, borderColor: 'gray', borderWidth: 0 , fontSize: 20}}
                       placeholder="0"
                       keyboardType='numeric'
                       value={this.state.produitQuentiteActuel}
                        onBlur={()=>this.validationQuantite()}
                       onChangeText={(text) => this.setState(prevState => ({
                         produitQuentiteActuel: prevState.produitQuentiteActuel =text

                       }))
                     }
                     ref={input => { this.produitQuentiteActuel = input }}
                     />
                </View>
                <View>
                  <TouchableOpacity onPress={this.plus}>
                    <Image
                      source={require('./pages_images/plus.png')}
                      style={{ width: 50, height: 50, marginLeft: 10,marginTop: '7%'}}
                    />
                  </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity onPress={this.min}>
                      <Image
                        source={require('./pages_images/minus.png')}
                        style={{ width: 50, height: 50, marginLeft: 10,marginTop: '7%'}}
                      />
                    </TouchableOpacity>
                    </View>
            </View>


          </View>
          <View style={{flexDirection: 'column'}}>
            <View>
                <Text style={styles.detail_text}>Prix/Dt</Text>
            </View>
            <View>
                <TextInput
                 style={{ height: 50, borderColor: 'gray', borderWidth: 0 , fontSize: 20}}
                 placeholder="Ex:10"
                 keyboardType='numeric'
                 value={this.state.produitPrixActuel}
                  onBlur={()=>this.validationPrix()}
                 onChangeText={(text) => this.setState(prevState => ({
                    produitPrixActuel: prevState.produitPrixActuel =text
                 }))
               }
               ref={input => { this.produitPrixActuel = input }}
                 />
            </View>
            <View>
               <Text style={{color: 'red',marginRight: "3%"}}>{this.state.prixErreur}</Text>
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
              onBlur={()=>this.validationFournisseur()}
             onChangeText={(text) => this.setState(prevState => ({
               produitFournisseurActuel: prevState.produitFournisseurActuel =text

             }))
           }
           ref={input => { this.produitFournisseurActuel = input }}
           />
        </View>
        <View>
           <Text style={{color: 'red',marginLeft: "35%"}}>{this.state.fournniseur}</Text>
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

   container: {
     flex: 1,
     padding: 30,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#fff'
   },
   button: {
     width: 250,
     height: 60,
     backgroundColor: '#3740ff',
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 4,
     marginBottom:12
   },
   buttonText: {
     textAlign: 'center',
     fontSize: 15,
     color: '#fff'
   },


     rectangle: {
        width: '100%',
        height: 50,
        backgroundColor: '#6A6A6A',
        marginTop: '2%',
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
