import firestore from '@react-native-firebase/firestore';


export function ajouterProduit(produit, ajoutTerminer){
  const nom=produit.nom;
  firestore()
    .collection('Produits')
    .add({
      nom: nom,
    })
    .then(() => {
      console.log('Produit Ajouter!');
    });

}
