import firestore from '@react-native-firebase/firestore';
import React, { useState, useEffect, Component } from 'react';
import { ActivityIndicator, FlatList, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export function ajouterFournisseur(fournisseur){
  const adresse=fournisseur.adresse;
    const mail=fournisseur.mail;
      const nom=fournisseur.nom;
        const notes=fournisseur.notes;
          const tel=fournisseur.tel;
            const code=fournisseur.code;


  firestore()
    .collection('Fournisseurs')
    .doc(tel)
    .set({
      adresse: adresse,
      mail: mail,
      nom: nom,
      notes: notes,
      tel: tel,
      code: code,
    })
    .then(() => {
      console.log('Fournisseur Ajouter!');
    });


}


export function afficheFournisseurs () {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [fournisseurs, setFournisseurs] = useState([]); // Initial empty array of Fournisseurs

  useEffect(() => {
  const subscriber = firestore()
    .collection('Fournisseurs')
    .onSnapshot(querySnapshot => {
      const fournisseurs = [];

      querySnapshot.forEach(documentSnapshot => {

        fournisseurs.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.code,
        });

      });
      setFournisseurs(fournisseurs);
      setLoading(false);
    });

  // Unsubscribe from events when no longer in use
  return () => subscriber();
}, []);



console.log('List Fournisseur charger !');
  global.fr = fournisseurs;
}



export function modifierFournisseur(fournisseur){
  const adresse=fournisseur.adresse;
    const mail=fournisseur.mail;
      const nom=fournisseur.nom;
        const notes=fournisseur.notes;
          const tel=fournisseur.tel;
            const code=fournisseur.code;

            firestore()
    .collection('Fournisseurs')
    .doc(tel.toString())
    .update({
      adresse: adresse,
      mail: mail,
      nom: nom,
      notes: notes,
      tel: tel,
      code: code,

    })
    .then(() => {
      console.log('Fournisseur Modifier!');
    });


}



export function supprimerFournisseur(tel){

  firestore()
    .collection('Fournisseurs')
    .doc(tel.toString())
    .delete()
    .then(() => {
      console.log('Fournisseur Supprimer!');
    });
}
