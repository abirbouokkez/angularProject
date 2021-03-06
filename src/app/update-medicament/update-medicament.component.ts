import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicamentService } from '../services/medicament.service';
import { Medicament } from '../model/medicament.model';

@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styles: [
  ]
})
export class UpdateMedicamentComponent implements OnInit {
  currentMedicament = new Medicament();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private medicamentService: MedicamentService) { } 

  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
this.currentMedicament = this.medicamentService.consulterMedicament(this.activatedRoute.snapshot.params.id);
console.log(this.currentMedicament);
} 
updateMedicament()
{ //console.log(this.currentMedicament);
this.medicamentService.updateMedicament(this.currentMedicament);
this.router.navigate(['medicaments']);
}}
