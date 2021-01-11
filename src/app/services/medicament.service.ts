import { Injectable } from '@angular/core';
import { Medicament } from '../model/medicament.model';
@Injectable({
providedIn: 'root'
})
export class MedicamentService {
medicaments : Medicament[]; 
constructor() {
this.medicaments = [
  {idMedicament:1, nomMedicament:"Panadole", prixMedicament:2500, dateCreationM:new Date ("01/01/2021")},
  {idMedicament:2, nomMedicament:"Doliprane", prixMedicament:4000, dateCreationM:new Date ("02/01/2021")},
  {idMedicament:3, nomMedicament:"Adol", prixMedicament:3000, dateCreationM:new Date ("03/01/2021")}
];
}
listeMedicaments():Medicament[] {
  return this.medicaments;
}
ajouterMedicament( medicament: Medicament){
this.medicaments.push(medicament);
}
supprimerMedicament( m: Medicament){

  const index = this.medicaments.indexOf(m, 0);
  if (index > -1) {
  this.medicaments.splice(index, 1);
}}
consulterMedicament(id:number): Medicament{
  this.medicament = this.medicaments.find(p => p.idMedicament == id);
  return this.medicament;
  }
  updateMedicament(m:Medicament)
  {
  // console.log(p);
  this.supprimerMedicament(m);
  this.ajouterMedicament(m);
  this.trierMedicaments ();
  }

  trierMedicaments(){
    this.medicaments = this.medicaments.sort((n1,n2) => {
    if (n1.idMedicament > n2.idMedicament) {
    return 1;
    }
    if (n1.idMedicament < n2.idMedicament) {
    return -1;
    }
    return 0;
    });
    }
}