import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback
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

   export default function Client({ navigation }) {
     afficheClients();

        const actionOnRow = (item) => {
          console.log('Selected Item :',item);
          Alert.alert("Clicked Item:::"+item.nom);
          // ToastAndroid.show(""+item.i,ToastAndroid.short);
        }


        const cb = (item) => {
          console.log(item);
                       navigation.push('DetailClient',{ item },);
            }
            
    return (

<View style={{flex: 1, flexDirection: 'column', marginTop: '5%'}}>

{/*//ce view dessou c'est le view qui considaire l'affichages des produits*/}
<View>
<FlatList
    data={cl}
    renderItem={({ item }) => (

<View style={{flexDirection: 'column'}}>
    <View style={{flexDirection: 'row'}}>

      <View style={{flex: 4}}>
        <TouchableOpacity onPress={() => cb(item)}>
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
keyExtractor={item => item.tel}
/>
</View>

{/*// Fin affichage des produits  */}
  {/* le view ci dessou est une line verticale */}


<View style={styles.bottom}>

      <View style={{flexDirection: 'row-reverse',justifyContent: 'space-between'}}>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('AjoutClient')}>
              <Image
                source={require('./images/add-user.png')}
                style={{height: 70,width: 70 ,marginRight: 15}}
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
