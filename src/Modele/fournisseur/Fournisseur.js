export default class Fournisseur {

  adresse: string;
  mail: string;
  nom: string;
  notes: string;
  tel: int;



    constructor(adresse,mail,nom,notes,tel) {
      this.tel=tel;
      this.notes=notes;
      this.nom=nom;
      this.mail=mail;
      this.adresse=adresse;
    }

  }
