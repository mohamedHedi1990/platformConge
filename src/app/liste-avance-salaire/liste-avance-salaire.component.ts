import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-liste-avance-salaire',
  templateUrl: './liste-avance-salaire.component.html',
  styleUrls: ['./liste-avance-salaire.component.scss']
})
export class ListeAvanceSalaireComponent implements OnInit {
  demandes = [];
  loading = false;

  constructor() {
  }

  ngOnInit(): void {
    this.demandes = [
      {employe: 'Rim Hajji', montant: '150', dateDem: '02-09-2020', status: 'IN_PROGRESS'},
      {employe: 'Amy Elsner', montant: '800', dateDem: '02-09-2020', status: 'IN_PROGRESS'},
      {employe: 'Elwin Sharvill', montant: '1150', dateDem: '02-09-2020', status: 'VALIDATED'},
      {employe: 'XuXue Feng', montant: '300', dateDem: '02-09-2020', status: 'REFUSED'},
    ];
  }

}
