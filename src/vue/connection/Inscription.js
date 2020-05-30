import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Inscriptionstyles from './Inscriptionstyles';
import Logo from './images/notre_logo_2_png.png';
import LogI from './images/logout-512.png';
import Eye from './images/iconEye.png';
import test from './test';
import NoEye from './images/no_eye.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


class Inscription extends Component{
  constructor() {
    super()
    this.state ={
      showPass: true,
      press: false,
    }
  }
  showPass = () => {
    if (this.state.press== false){
      this.setState({ showPass: false, press:true})
    }else {
        this.setState({ showPass: true, press:false})
    }
  };
  goToTest = () =>{
      this.props.navigation.navigate('test');
  };
  goToConnection = () =>{
      this.props.navigation.navigate('Connection');
  };
    render(){
  return (
   <View style={Inscriptionstyles.Container}>

        <View style={Inscriptionstyles.LogoContainer}>
          <Image source={Logo} style={Inscriptionstyles.Logo} />
          <Text style={Inscriptionstyles.LogoText}>Devenir L'un De Nous  </Text>
        </View>



        <View style={Inscriptionstyles.inputContainer}>
             <TextInput
             style={Inscriptionstyles.input}
             placeholder={'Nom'}
             placeholderTextColor={'#3c40c6'}
             underlineColorAndroid='transparent'
             />
           <View style={Inscriptionstyles.Align}>{ /*cree le lign*/}
             <View style={{width: 300,height: 1,backgroundColor: '#000000'}}/>
           </View>
        </View>



        <View style={Inscriptionstyles.inputContainer}>
             <TextInput
             style={Inscriptionstyles.input}
             placeholder={'Prénom'}
             placeholderTextColor={'#3c40c6'}
             underlineColorAndroid='transparent'
             />
           <View style={Inscriptionstyles.Align}>{ /*cree le lign*/}
             <View style={{width: 300,height: 1,backgroundColor: '#000000'}}/>
           </View>
        </View>






        <View style={Inscriptionstyles.inputContainer}>
             <TextInput
             style={Inscriptionstyles.input}
             placeholder={'Email'}
             placeholderTextColor={'#3c40c6'}
             underlineColorAndroid='transparent'
             />
           <View style={Inscriptionstyles.Align}>{ /*cree le lign*/}
             <View style={{width: 300,height: 1,backgroundColor: '#000000'}}/>
           </View>
        </View>


        <View style={Inscriptionstyles.inputContainer}>
             <TextInput
             style={Inscriptionstyles.input}
             placeholder={'Mot de pass'}
             secureTextEntry={this.state.showPass}
             placeholderTextColor={'#3c40c6'}
             underlineColorAndroid='transparent'
             />
             <TouchableOpacity style={Inscriptionstyles.btneye} onPress={this.showPass.bind(this)}>
                 <Image source={this.state.press== false ? NoEye  : Eye} style={Inscriptionstyles.eye} />
             </TouchableOpacity>

           <View style={Inscriptionstyles.Align}>{ /*cree le lign*/}
             <View style={{width: 300,height: 1,backgroundColor: '#000000'}}/>
            </View>
        </View>



        <View style={Inscriptionstyles.inputContainer}>
             <TextInput
             style={Inscriptionstyles.input}
             placeholder={'téléphone'}
             autoCompleteType='cc-number'
             placeholderTextColor={'#3c40c6'}
             underlineColorAndroid='transparent'
             />
           <View style={Inscriptionstyles.Align}>{ /*cree le lign*/}
             <View style={{width: 300,height: 1,backgroundColor: '#000000'}}/>
           </View>
        </View>


        <View>
          <TouchableOpacity style={Inscriptionstyles.btn} onPress={this.goToTest}>
              <Image source={LogI} style={Inscriptionstyles.Logobtn} />
          </TouchableOpacity>
        </View>

         <View >
           <TouchableOpacity  onPress={this.goToConnection}>
               <Text  style={Inscriptionstyles.TContainer} >Vous possédez déjà un compte?   Connection</Text>
           </TouchableOpacity>

         </View>
   </View>
  );
}
};
export default Inscription;
