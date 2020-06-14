import firestore from '@react-native-firebase/firestore';
import React, { useState, useEffect, Component } from 'react';
import { ActivityIndicator, FlatList, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export function ajouterClient(client){
  const adresse=client.adresse;
    const mail=client.mail;
      const nom=client.nom;
        const notes=client.notes;
          const tel=client.tel;
            const code=client.code;


  firestore()
    .collection('Clients')
    .add({
      adresse: adresse,
      mail: mail,
      nom: nom,
      notes: notes,
      tel: tel,
      code: code,
    })
    .then(() => {
      console.log('Client Ajouter!');
    });


}


export function afficheClients () {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [clients, setClients] = useState([]); // Initial empty array of Clients

  useEffect(() => {
  const subscriber = firestore()
    .collection('Clients')
    .onSnapshot(querySnapshot => {
      const clients = [];

      querySnapshot.forEach(documentSnapshot => {

        clients.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.code,
        });

      });
      setClients(clients);
      setLoading(false);
    });

  // Unsubscribe from events when no longer in use
  return () => subscriber();
}, []);



console.log('List Client charger !');
  global.cl = clients;
}
