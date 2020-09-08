import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-demande-conge',
  templateUrl: './new-demande-conge.component.html',
  styleUrls: ['./new-demande-conge.component.scss']
})
export class NewDemandeCongeComponent implements OnInit {
  requestForm = new FormGroup({
    demandeCongeType: new FormControl(null, Validators.required),
    dateDeb: new FormControl(new Date(), Validators.required),
    dateFin: new FormControl(new Date(), Validators.required),
    remplacantId: new FormControl(null, Validators.required),
    tacheDele: new FormControl('', Validators.required),
    });
  users = [];
  constructor() { }

  ngOnInit(): void {
  }

  get demandeCongeType(): AbstractControl { return this.requestForm.get('demandeCongeType'); }
  get remplacantId(): AbstractControl { return this.requestForm.get('remplacantId'); }

  get tacheDele(): AbstractControl { return this.requestForm.get('tacheDele'); }



}
