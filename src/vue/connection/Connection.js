import React, { Component } from 'react';
import {View,
        Image,
        Text,
        ImageBackground,
        TextInput,
        TouchableOpacity,
        Alert
        } from 'react-native';
import ConnectionStyles from './ConnectionStyles';

import Test from './test';
import Logo from './images/notre_logo_2_png.png';
import LogC from './images/logout-512.png';
import Eye from './images/iconEye.png';
import NoEye from './images/no_eye.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Menu from '../../../Menu';


class Connection extends Component{
  //fonction verifier Login

 //valuer de champ
   constructor() {
     super()
	 //il state kima il var
     this.state ={
       showPass: true,
       press: false,
       Email: '',
       Motp: '',
     }
   }
   showPass = () => {
     if (this.state.press== false){
       this.setState({ showPass: false, press:true})
     }else {
         this.setState({ showPass: true, press:false})
     }
   };

  goToTest = () => {
         if(this.state.Email == 'Pdg' && this.state.Motp == '123'){
          this.props.navigation.navigate('Test');

          }
          else{
            Alert.alert('', 'Email ou mot de pass incorrect');

          }
      };

      goToMenu = () => {
       this.props.navigation.navigate('Menu');
     };

  goToInscription = () => {
   this.props.navigation.navigate('Inscription');
 };

  render(){
  return (
       <View style={ConnectionStyles.Container}>

           <View style={ConnectionStyles.LogoContainer}>
             <Image source={Logo} style={ConnectionStyles.Logo} />
             <Text style={ConnectionStyles.LogoText}>Bon Retour </Text>
           </View>

           <View style={ConnectionStyles.inputContainer}>
                <TextInput
                style={ConnectionStyles.input}
                placeholder={'Email'}
                placeholderTextColor={'#3c40c6'}
				//il onchangetext tbadel il var 7aseb il champ eli ktebtu w il value hiya nafes value il 3adiya
                 onChangeText={(value) => this.setState({Email: value})}
                 value={this.state.Email}
                underlineColorAndroid='transparent'
                />
              <View style={ConnectionStyles.Align}>{ /*cree le lign*/}
                <View style={{width: 300,height: 1,backgroundColor: '#000000'}}/>
              </View>
           </View>

           <View style={ConnectionStyles.inputContainer}>
                <TextInput
                style={ConnectionStyles.input}
                placeholder={'Mot de pass'}
                secureTextEntry={this.state.showPass}
                placeholderTextColor={'#3c40c6'}
                onChangeText={(value) => this.setState({Motp: value})}
                value={this.state.Motp}
                underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={ConnectionStyles.btneye} onPress={this.showPass.bind(this)}>
                    <Image source={this.state.press== false ? NoEye  : Eye }style={ConnectionStyles.eye} />
                </TouchableOpacity>

              <View style={ConnectionStyles.Align}>{ /*cree le lign*/}
                <View style={{width: 300,height: 1,backgroundColor: '#000000'}}/>
               </View>
           </View>

          <View>

          <TouchableOpacity onPress={this.goToMenu} style={ConnectionStyles.btn}>
                        <Image source={LogC} style={ConnectionStyles.Logobtn} />
                    </TouchableOpacity>
          </View>






           <View >
             <TouchableOpacity onPress={this.goToInscription}>
                 <Text  style={ConnectionStyles.TContainer} >Vous n'avez pas un compte ?     Inscription</Text>
             </TouchableOpacity>

           </View>
         </View>
  );
}
};

export default Connection;
