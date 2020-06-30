import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Det_ClientStyles from './Det_ClientStyles';
import ClientStyles from './ClientStyles';
import User from './images/user.png';
import Tel from './images/tel.png';
import Note from './images/note.png';
import Location from './images/location.png';
import Email from './images/email.webp';
import Modifier from './images/modifier.png';
import Supprimer from './images/supprimer.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Client from '../../Modele/client/Client';

class DetailClient extends Component{


  state={
       clientNomActuel: null,
       clientTelActuel: null,
       clientMailActuel: null,
       clientAdresseActuel: null,
       clientNotesActuel: null,
       clientCodeActuel : null,

     }

     modifier = () => {
     this.client=new Client();
     this.client.nom=this.state.clientNomActuel;
     this.client.tel=this.state.clientTelActuel;
     this.client.mail=this.state.clientMailActuel;
     this.client.adresse=this.state.clientAdresseActuel;
     this.client.notes=this.state.clientNotesActuel;
     this.client.code=this.state.clientCodeActuel;

     modifierClient(this.client);
     };




  render(){
    const { navigation } = this.props;
  const item = navigation.getParam('item', 'item');

    return(
      <View style={Det_ClientStyles.Container}>

            <View >

                            <View style={Det_ClientStyles.Test}>
                  <Image source={User} style={Det_ClientStyles.Iconuser} />
                  <TextInput
                  style={ClientStyles.input}
                  placeholderTextColor={'#aaa69d'}
                  underlineColorAndroid='transparent'
                  value={item.nom}
                  onChangeText={(text) => this.setState(prevState => ({
                    clientNomActuel: prevState.clientNomActuel =text
                    }))
                  }
                  />

                            </View>



                            <View style={Det_ClientStyles.Test}>
                  <Image source={Tel} style={Det_ClientStyles.Icontel} />
                  <Text style={Det_ClientStyles.Text}>{item.tel}</Text>
                            </View>




                            <View style={Det_ClientStyles.Test}>
                         <Image source={Email} style={Det_ClientStyles.Iconemail} />
                         <Text style={Det_ClientStyles.Text}>{item.mail}</Text>
                            </View>



                            <View style={Det_ClientStyles.Test}>
                              <Image source={Location} style={Det_ClientStyles.Iconemail} />
                            <Text style={Det_ClientStyles.Text}>{item.adresse} </Text>
                            </View>



                            <View style={Det_ClientStyles.Test}>
                              <Image source={Note} style={Det_ClientStyles.Iconemail} />
                              <Text style={Det_ClientStyles.Text}>{item.notes} </Text>
                            </View>


<View style={{flex: 1, flexDirection: 'row' ,justifyContent: 'flex-end',marginRight: 32,marginTop: 70}}>

  <View style={Det_ClientStyles.Modifier}>
    <TouchableOpacity >
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: '9%'}}>

        <Text style={Det_ClientStyles.textbtn}>Modifier</Text>

          <View>
           <Image source={Modifier} style={Det_ClientStyles.Logobtn}  />
          </View>
       </View>
     </TouchableOpacity>
  </View>

  <View style={Det_ClientStyles.Supprimer}>
   <TouchableOpacity >
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: '9%'}}>
      <Text style={Det_ClientStyles.textbtn}>Supprimer</Text>
       <View>
         <Image source={Supprimer} style={Det_ClientStyles.Logobtn2}  />
       </View>
     </View>
   </TouchableOpacity>
  </View>

</View>



            </View>
       </View>
    );
  }


};
export default DetailClient;
