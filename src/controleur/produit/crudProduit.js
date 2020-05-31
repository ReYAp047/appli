import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export function ajouterProduit(produit){
  const code=produit.code;
    const codeBarre=produit.codeBarre;
      const nom=produit.nom;
        const date=produit.date;
          const heur=produit.heur;
            const quentite=produit.quentite;
              const fournniseur=produit.fournniseur;

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
    })
    .then(() => {
      console.log('Produit Ajouter!');
    });


}
