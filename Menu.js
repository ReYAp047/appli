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
import Screen2 from './src/vue/produit/Screen2';
import Screen3 from './src/vue/produit/Screen3';
import Screen4 from './root/Fournisseur';
import Screen5 from './root//Client';
import Screen6 from './src/vue/produit/Screen6';
import List_Produits from './src/vue/produit/List_Produits';
import AjouterProd from './src/vue/produit/AjouterProd';



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

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
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


const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
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



const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen4 will be indexed here
  Fourth: {
    screen: Screen4,
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

const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Screen5 will be indexed here
  Fifth: {
    screen: Screen5,
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

const Screen6_StackNavigator = createStackNavigator({
  //All the screen from the Screen6 will be indexed here
  Sixth: {
    screen: Screen6,
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

const AjouterProd_StackNavigator = createStackNavigator({
  //All the screen from the Screen6 will be indexed here
  addProd: {
    screen: AjouterProd,
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

const List_Produits_StackNavigator = createStackNavigator({
  //All the screen from the Screen6 will be indexed here
  addProd: {
    screen: List_Produits,
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
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Contoleur',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Liveur',
    },
  },
  Screen4: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Fournisseur',
    },
  },
  Screen5: {
    //Title
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Client',
    },
  },
  Screen6: {
    //Title
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Déconnexion ',
    },
  },
  AjouterProd: {
    //Title
    screen: AjouterProd_StackNavigator,
    navigationOptions: {
      drawerLabel: ' ',
    },
  },
  List_Produits: {
    //Title
    screen: List_Produits_StackNavigator,
    navigationOptions: {
      drawerLabel: ' ',
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
