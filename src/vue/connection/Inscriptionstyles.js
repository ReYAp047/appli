import {StyleSheet}from 'react-native';

const Inscriptionstyles =StyleSheet.create({

    Container: {
      flex: 1,
    },


  LogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%'

  },

  Logo: {
    width: 150,
    height: 150
  },

  LogoText: {
    color: '#1e272e',
    fontSize: 20,
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
     marginLeft: '20%',
     alignItems: 'center',
     marginTop: '15%'
   },

   Logobtn: {
     width: 30,
     height: 30
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
     marginTop: '10%'


   },
});
export default Inscriptionstyles;
