//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image, TouchableOpacity } from 'react-native';
// import all basic components

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AjouterProd from './AjouterProd';
import Screen6 from './Screen6';



  class Screen1 extends Component {
  //Screen1 Component



goToAjouterProd = () => {
  this.props.navigation.navigate('AjouterProd');
};


  render() {
    return (
<View style={{flex: 1, flexDirection: 'column'}}>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>

            <View>
              <Text style={styles.titre}>Stock</Text>
            </View>

            <View>
              <Text style={styles.titre}>Recherche</Text>
            </View>

      </View>

  <View style={{flexDirection: 'row',marginTop: 7}}>

      <View style={{flex: 1}}>
         <Image
           source={require('./pages_images/totale.png')}
           style={styles.image}
         />
      </View>


      <View style={{flex: 6}}>
          <Text style={{ fontSize: 20 }}> Totale Des Produits Trouver </Text>
      </View>

       <View style={styles.circle} >
          <Text style={styles.circle_text}>1</Text>
       </View>

   </View>
{/*//ce view dessou c'est le view qui considaire l'affichages des produits*/}
   <View style={{flexDirection: 'row',marginTop: 13}}>

     <View style={{flex: 1,marginTop: 7}}>
        <Image
          source={require('./pages_images/produit_icone.png')}
          style={styles.image}
        />
     </View>

     <View style={{flex: 5,marginTop: 7}}>
         <Text style={{ fontSize: 20 }}> Produit1 </Text>
     </View>

     <View style={styles.produit_circle} >
        <Text style={styles.circle_produit_text}>8</Text>
     </View>
     <View style={{flex: 1}}>
        <Image
          source={require('./pages_images/modifier_produit.png')}
          style={{height: 50,width: 50}}
        />
     </View>

   </View>
{/*// Fin affichage des produits  */}
  {/* le view ci dessou est une line verticale */}
      <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}  />

<View style={styles.bottom}>

      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <View>
            <Image
              source={require('./pages_images/code_a_barre.png')}
              style={{height: 80,width: 90 ,marginLeft: 15}}
            />
        </View>
        <View>
          <TouchableOpacity onPress={this.goToAjouterProd}>
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
  marginTop: 7
},
circle_produit_text:{
  marginLeft: 13,
  marginTop: 7,
  color: "white",
  fontWeight: 'bold',
  fontSize: 15

},
image: {
   width: 35,
   height: 35,
   marginLeft: 7
},
bottom: {
  flex: 1,
  justifyContent: 'flex-end',
}
});





  export default Screen1;
