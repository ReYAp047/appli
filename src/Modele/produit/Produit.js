export default class Produit {

idPdg: int;
codeBarre: int;
quentite: int;
nom: string;
prix: int;
lien: string;
fournniseur: string;



  constructor(idpdg, codeBarre, quentite, nom, prix, fournniseur, lien) {
    this.idpdg=idpdg;
    this.codeBarre=codeBarre;
    this.quentite=quentite;
    this.nom=nom;
    this.prix=prix;
    this.fournniseur=fournniseur;
    this.lien=lien;
  }
}
