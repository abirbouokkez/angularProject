import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/medicament.model';
import { MedicamentService } from '../services/medicament.service';
@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  medicaments : Medicament[];
  constructor(private medicamentService: MedicamentService) { 
   
    this.medicaments = medicamentService.listeMedicaments();
  }

  ngOnInit(): void {
  }
supprimerMedicament (m: Medicament)
{
//console.log(m);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.medicamentService.supprimerMedicament(m);
}

}
