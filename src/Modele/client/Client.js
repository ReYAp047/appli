export default class Client {

adresse: string;
mail: string;
nom: string;
notes: string;
tel: int;
code: int;



  constructor(adresse,mail,nom,notes,tel,code) {
    this.code=code;
    this.tel=tel;
    this.notes=notes;
    this.nom=nom;
    this.mail=mail;
    this.adresse=adresse;
  }
}