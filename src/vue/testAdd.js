import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ajouterProduit} from '../controleur/addFire';


export default class AjouterProd extends Component {

  state={

         produitItemActuel: null,


       }
render(){
  return (

      <View>
        <View>
          <Text> Nchala te5dem </Text>
        </View>
        <View>
          <Text> Test ajout produit </Text>
        </View>
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
        <View>
          <TouchableOpacity onPress={() =>
          ajouterProduit(
          {nom: this.state.produitItemActuel},)  }>

                          <Text style={{marginTop: '10%',marginRight: '9%',fontSize: 17}}>Enregistrer</Text>
                        </TouchableOpacity>
                      </View>
      </View>

  )
}
}
