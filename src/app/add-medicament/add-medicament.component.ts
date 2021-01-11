import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/medicament.model';
import {MedicamentService} from '../services/medicament.service';
@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css']
})
export class AddMedicamentComponent implements OnInit {
  newMedicament = new Medicament();

  constructor(private medicamentService: MedicamentService) { }
  ngOnInit(): void{}

   addMedicament(){
  
    this.medicamentService.ajouterMedicament(this.newMedicament);
   }
}
