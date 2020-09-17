import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-frais',
  templateUrl: './liste-frais.component.html',
  styleUrls: ['./liste-frais.component.scss']
})
export class ListeFraisComponent implements OnInit {
  demandes = [];
  loading = false;
  currentUserString = localStorage.getItem('user');
  currentUser = JSON.parse(this.currentUserString);
  isEmploye = false;
  isRH = true;
  isAdmin = false;
  constructor() { }

  ngOnInit(): void {
    this.isEmploye = this.currentUser.role === 'EMPLOYE';
    this.isRH = this.currentUser.role === 'RH';
    this.isAdmin = this.currentUser.role === 'ADMIN';
    this.demandes = [
      {employe: 'Rim Hajji', montant: '150', dateDem: '02-09-2020', dateMession: '02-09-2020', status: 'IN_PROGRESS'},
      {employe: 'Amy Elsner', montant: '800', dateDem: '02-09-2020', dateMession: '02-09-2020', status: 'IN_PROGRESS'},
      {employe: 'Elwin Sharvill', montant: '1150', dateDem: '02-09-2020', dateMession: '02-09-2020', status: 'VALIDATED'},
      {employe: 'XuXue Feng', montant: '300', dateDem: '02-09-2020', dateMession: '02-09-2020', status: 'REFUSED'},
    ];
  }

}
