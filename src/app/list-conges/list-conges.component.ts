import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-conges',
  templateUrl: './list-conges.component.html',
  styleUrls: ['./list-conges.component.scss']
})
export class ListCongesComponent implements OnInit {
conges = [];
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
    this.conges = [
      {employe: 'Rim Hajji', demandeCongeType: 'Maladie', motif: 'Maladie', dateDeb: '02-09-2020', dateFin: '04-09-2020', nbrJrs: '2',
        remplacant: 'Asya Javayant', tacheDele: 'Migration vers le nouveau platform', dateDem: '02-09-2020', status: 'VALIDATED' },
    {employe: 'Amy Elsner', demandeCongeType: 'Vacance annuaire', motif: 'Vacance annuaire', dateDeb: '02-09-2020', dateFin: '10-09-2020', nbrJrs: '8',
      remplacant: 'Bernardo Dominic', tacheDele: 'Implémentation des fonctionnalités sur le platforme', dateDem: '31-08-2020', status: 'REFUSED' },
    {employe: 'Elwin Sharvill', demandeCongeType: 'Vacance annuaire', motif: 'Vacance annuaire', dateDeb: '10-09-2020',
      dateFin: '14-09-2020', nbrJrs: '4',
      remplacant: 'Stephen shaw', tacheDele: 'Tester le nouveau platform', dateDem: '31-08-2020', status: 'IN_PROGRESS' },
    {employe: 'XuXue Feng', demandeCongeType: 'Maladie', motif: 'Maladie', dateDeb: '31-08-2020', dateFin: '31-08-2020', nbrJrs: '1',
      remplacant: 'Ivan Magalhaes', tacheDele: 'Testes et validation', dateDem: '31-08-2020', status: 'VALIDATED' }
    ]
  }

}
