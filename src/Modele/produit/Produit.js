export default class Produit {

code: int;
codeBarre: int;
quentite: int;
nom: string;
date: string;
heur: string;
lien: string;
fournniseur: string;



  constructor(code, codeBarre, quentite, nom, date, heur, fournniseur, lien) {
    this.code=code;
    this.codeBarre=codeBarre;
    this.quentite=quentite;
    this.nom=nom;
    this.date=date;
    this.heur=heur;
    this.fournniseur=fournniseur;
    this.lien=lien;
  }
}
