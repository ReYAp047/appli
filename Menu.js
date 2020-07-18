//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Import external files
import Home from './root/home';
import Fournisseur from './root/Fournisseur';
import Client from './root//Client';
import Deconnexion from './src/vue/produit/Deconnexion';



class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
      <View>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 32, height: 32, marginLeft: 10, marginTop: 7 }}
          />
        </TouchableOpacity>
        </View>

        <View>

    <Image
      source={require('./image/logo.png')}
      style={{ width: 45, height: 45 , marginLeft: 15 ,marginRight: 10}}
    />

</View>

<View style={{flex: 1, flexDirection: 'column'}}>
   <View>
   <Text style={styles.titleText}>You Shop</Text>
   </View>

   <View>
   <Text style={{color:'white'}}>Invantaire</Text>
   </View>

 </View>

<View style={{flexDirection: 'row'}}>

<View>
          <Image
            source={require('./image/commande.png')}
            style={{ width: 42, height: 42 , marginLeft: 80,marginTop: 5}}
          />
      </View>

      <View>
        <Text style={{color:'white', marginLeft: 5, marginTop: 15}}>Commande</Text>
      </View>

    </View>

      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Home will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({

      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0099FF',


      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 10,
        },
    }),
  },
});

const Fournisseur_StackNavigator = createStackNavigator({
  //All the screen from the Fournisseur will be indexed here
  Fourth: {
    screen: Fournisseur,
    navigationOptions: ({ navigation }) => ({

      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0099FF',


      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 0,
        },
    }),
  },
});

const Client_StackNavigator = createStackNavigator({
  //All the screen from the Client will be indexed here
  Fifth: {
    screen: Client,
    navigationOptions: ({ navigation }) => ({

      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0099FF',


      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 0,
        },
    }),
  },
});






const Deconnexion_StackNavigator = createStackNavigator({

  addProd: {
    screen: Deconnexion,
    navigationOptions: ({ navigation }) => ({

      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0099FF',


      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 0,
        },
    }),
  },
});





const DrawerNavigatorExample = createDrawerNavigator({




  //Drawer Optons and indexing
  Home: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Accueil',
    },
  },


  Fournisseur: {
    //Title
    screen: Fournisseur_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Fournisseur favoris',
    },
  },
  Client: {
    //Title
    screen: Client_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Client favoris',
    },
  },




  Deconnexion: {
    //Title
    screen: Deconnexion_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Deconnexion',
    },
  },
});



const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Lucida Fax",
    fontSize: 15,
    color: "white",
    fontWeight: "bold"
  }
});


export default createAppContainer(DrawerNavigatorExample);
