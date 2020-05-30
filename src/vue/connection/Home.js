import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Inscription from './Inscription';
import Connection from './Connection';
import HomeStyles from './HomeStyles';
import LogConx from './images/access_key-512.png';
import LogInsc from './images/add-user-512.png';
import Logo from './images/notre_logo_2_png.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
class Home extends Component{
  //fontion thezek lel page connection
  goToConnection = () => {
    this.props.navigation.navigate('Connection');
  };
  //fonction thezek lel page inscirption
  goToInscription = () => {
    this.props.navigation.navigate('Inscription');
  };

  render(){
  return (
     <View style={HomeStyles.Containe}>

     <View style={HomeStyles.LogoContaine}>{/*login*/}
     <Image  style={HomeStyles.Logo}  source={Logo}/>

    <Text style={HomeStyles.LogoText}> Bienvenue Dans YOU SHOP </Text>

    <View style={HomeStyles.Align}>{ /*cree le lign*/}
      <View style={{width: 200,height: 1,backgroundColor: '#000000'}}/>
    </View>
       <Text style={HomeStyles.SousTitre}> L'achat en un Clic </Text>
   </View>



   <View style={HomeStyles.btn1}>
    <TouchableOpacity style={HomeStyles.ActionButton}onPress={this.goToConnection}  >

<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: '9%'}}>

        <View>
          <Image source={LogConx} style={HomeStyles.Logobtn}  />
          </View>

        <View style={HomeStyles.text}>
          <Text style={HomeStyles.textbtn}>Connection a votre compte </Text>
        </View>

    </View>
      </TouchableOpacity>
   </View>


   <View style={HomeStyles.btn2}>
    <TouchableOpacity style={HomeStyles.ActionButton} onPress={this.goToInscription}>

    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: '20%'}}>

        <Image  source={LogInsc} style={HomeStyles.Logobtn} />
      <Text >Inscrivez-vous</Text>

      </View>
      </TouchableOpacity>
   </View>
</View>
  );
  }
};

export default Home;
