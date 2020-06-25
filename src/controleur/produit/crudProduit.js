import firestore from '@react-native-firebase/firestore';
import React, { useState, useEffect, Component } from 'react';
import { ActivityIndicator, FlatList, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export function ajouterProduit(produit){
  const code=produit.code;
    const codeBarre=produit.codeBarre;
      const nom=produit.nom;
        const date=produit.date;
          const heur=produit.heur;
            const quentite=produit.quentite;
              const fournniseur=produit.fournniseur;
                const lien=produit.lien;

  firestore()
    .collection('Produits')
    .add({
      code: code,
      codeBarre: codeBarre,
      nom: nom,
      date: date,
      heur: heur,
      quentite: quentite,
      fournniseur: fournniseur,
      lien : lien,

    })
    .then(() => {
      console.log('Produit Ajouter!');
    });


}




export function nombreProduits(){
  var query = firestore().collection('Produits');

  query.get().then(querySnapshot => {
      global.bar = querySnapshot.size;


  });



}


export function afficheProduits () {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [produits, setProduits] = useState([]); // Initial empty array of Produits

  useEffect(() => {
  const subscriber = firestore()
    .collection('Produits')
    .onSnapshot(querySnapshot => {
      const produits = [];

      querySnapshot.forEach(documentSnapshot => {

        produits.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.code,
        });

      });
      setProduits(produits);
      setLoading(false);
    });

  // Unsubscribe from events when no longer in use
  return () => subscriber();
}, []);



console.log('list prod');
  global.foo = produits;
}
