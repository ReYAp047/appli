import {StyleSheet}from 'react-native';

const HomeStyles =StyleSheet.create({
    Container: {
      flex: 1,

      alignItems: 'center'
    },

    LogoText: {
      color: '#1e272e',
      fontSize: 20,
      marginTop: '10%',
      opacity: 0.5,
    },

    LogoContaine: {
      marginTop: 90,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50
    },

    Logo: {
      height: 150,
      width: 150
    },


    Align:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '5%'

    },


    btn1:{
      height: 50,
      width: 300,
      borderRadius: 25,
      backgroundColor: '#34ace0',
      justifyContent: 'center',
      marginTop: '5%',
      marginLeft: 50,
      alignItems: 'center'
    },


    btn2:{
      height: 50,
      width: 300,
      borderRadius: 25,
      backgroundColor: '#34ace0',
      justifyContent: 'center',
      marginTop: '15%',
      marginLeft: 50,

      alignItems: 'center'

    },

   ActionButton: {
     width: 300,
     height: 50,

   },

   Logobtn:{
     width: 20,
     marginLeft: 30,
     height :20
   },



   textbtn:{
     textAlign: 'center',
     },


});
export default HomeStyles;
