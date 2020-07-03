//This is an example code for NavigationDrawer//
import React, { Component, useState, useEffect } from 'react';
//import react in our code.
import { StyleSheet,
  View,
  Text,Image,
  TouchableOpacity,
  FlatList,
  Alert,
  TouchableWithoutFeedback } from 'react-native';
import { Searchbar } from 'react-native-paper';
// import all basic components
import _ from 'lodash';
import {createAppContainer, DrawerItems,StackNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import AjouterProd from './AjouterProd';
import Screen6 from './Screen6';

import {afficheProduits} from '../../controleur/produit/crudProduit';
import {nombreProduits} from '../../controleur/produit/crudProduit';



class B {
  abc() {
    console.log("test ajoaefaz");
  }
}







   export default function List_Produits({ navigation }) {
     nombreProduits();
     afficheProduits();
     const [query,setQuery] = useState([]);
     const [donnee,setDonnee] = useState(foo);

     useEffect(() => {
      setDonnee(foo);


     }, []);

     const chercher = (text) => {
       console.log("text",text);
       const don = (_.filter(foo, { nom: text }));


      if(don && don.length > 0){
        setDonnee(don);
      }else{
        setDonnee(foo);
      }
      console.log("donnee",don);
      console.log("foo",foo);

}
    return (

<View style={{flex: 1, flexDirection: 'column'}}>
  <View>
  <Searchbar
         placeholder="Chercher un Produit"
         onChangeText={chercher}
       />
  </View>


  <View style={{flexDirection: 'row',marginTop: 7}}>

      <View style={{flex: 1}}>
         <Image
           source={require('./pages_images/totale.png')}
           style={styles.image}
         />
      </View>


      <View style={{flex: 6, marginTop: 10}}>
          <Text style={{ fontSize: 20 }}> Totale Des Produits Trouver </Text>
      </View>

       <View style={styles.circle} >
          <Text style={styles.circle_text}>{bar}</Text>
       </View>

   </View>
{/*//ce view dessou c'est le view qui considaire l'affichages des produits*/}
<View>
<FlatList
    data={donnee}
    renderItem={({ item }) => (


    <View style={{flexDirection: 'column'}}>
       <View style={{flexDirection: 'row',marginTop: 13}}>

         <View style={{flex: 1,marginTop: 7}}>
            <Image
              source={{uri: item.lien}}
              style={styles.image}
            />
         </View>

         <View style={{flex: 5,marginTop: 14, marginLeft: 8}}>
             <Text style={{ fontSize: 20 }}> {item.nom} </Text>
         </View>

         <View style={styles.produit_circle} >
            <Text style={styles.circle_produit_text}>{item.quentite}</Text>
         </View>

         <View style={{flex: 1}}>
            <Image
              source={require('./pages_images/modifier_produit.png')}
              style={{height: 50,width: 50, marginTop: 7}}
            />
         </View>


       </View>
       <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop: 5}}>
       </View>
    </View>

 )}
  keyExtractor={item => item.codeBarre}
/>
</View>

{/*// Fin affichage des produits  */}
  {/* le view ci dessou est une line verticale */}


<View style={styles.bottom}>

      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <View>
            <Image
              source={require('./pages_images/code_a_barre.png')}
              style={{height: 80,width: 90 ,marginLeft: 15}}
            />
        </View>
        <View>

           <TouchableOpacity onPress={() => navigation.navigate('AjouterProd')}>
              <Image
                source={require('./pages_images/ajouter.png')}
                style={{height: 80,width: 90 ,marginRight: 15}}
              />
          </TouchableOpacity>
        </View>
      </View>

      </View>

</View>
    );

}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  titre: {
    fontSize: 25,
    color: "#0581D4",
    fontFamily: "Lucida Fax",
  fontWeight: 'normal',
    paddingTop: 5,
    marginLeft: 5,
    justifyContent: 'flex-start',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: '#F44336',
    marginRight: 5,
    marginTop: 5

},
circle_text:{
  marginLeft: 21,
  marginTop: 14,
  color: "white",
  fontWeight: 'bold',
  fontSize: 15

},
produit_circle:{
  width: 35,
  height: 35,
  borderRadius: 35/2,
  backgroundColor: '#0099FF',
  marginRight: 5,
  marginTop: 14
},
circle_produit_text:{
  marginLeft: '30%',
  marginRight: '14%',
  marginTop: 7,
  color: "white",
  fontWeight: 'bold',
  fontSize: 15

},
image: {
   width: 50,
   height: 50,
   marginLeft: 7
},
bottom: {
  flex: 1,
  justifyContent: 'flex-end',
}
});
