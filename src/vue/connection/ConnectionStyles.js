import {StyleSheet}from 'react-native';

const ConnectionStyles =StyleSheet.create({

  Container: {
    flex: 1,


  },
  LogoContainer: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50

  },

  Logo: {
    width: 150,
    height: 150
  },

  LogoText: {
    color: '#1e272e',
    fontSize: 20,
    marginTop: '5%',
    opacity: 0.5,
  },
   inputContainer: {
     marginTop: '5%'
   },

   input: {
     height: 45,
     fontSize:16,
     color: '#3c40c6',
     marginHorizontal: 25,
     marginLeft :'15%'

   },

   Align:{
   flex: 1,
   alignItems: 'center',
   flexDirection: 'column',
   justifyContent: 'center'

   },

   btn:{
     height: 50,
     width: 250,
     borderRadius: 25,
     backgroundColor: '#b33939',
     justifyContent: 'center',
     marginTop: '25%',
     marginLeft: 70,
     alignItems: 'center'
   },

   Logobtn: {
     width: 30,
     height: 30,

   },

     btneye :{
       position: 'absolute',
       top: 15,
       right: 50
     },

     eye:{
       width: 20,
       height: 20
     },
   TContainer: {
     textAlign:'center',
     fontSize: 15,
     marginTop: '30%',

   },
});
export default ConnectionStyles;
