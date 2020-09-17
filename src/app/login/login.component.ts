import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginError = false;
  user = {
    matriculeUtilisateur: '',
    passwordUtilisateur: '',
  };
  saved_users = [{nom: 'Jlassi', pernom: 'Rim', matricule: 'RJ-090-SEA', email: 'a.elsner@gmail.com', creationDate: '30-08-2020', status: 'IN_PROGRESS', pictureTitle: 'ea.jpg', soldeConge: 5, login: 'RJlassi090', role: 'EMPLOYE'},
  {nom: 'Fali', pernom: 'Anna', matricule: 'FA-091-SEA', email: 'a.fali@gmail.com', creationDate: '30-08-2020', status: 'ACTIVE', pictureTitle: 'fa.jpg', soldeConge: 5, login: 'AFali091', role: 'RH'},
  {nom: 'Admin', pernom: 'Admin', matricule: 'AA-092-SEA', email: 'admin@gmail.com', creationDate: '30-08-2020', status: 'ACTIVE', pictureTitle: 'fa.jpg', soldeConge: 5, login: 'admin', role: 'ADMIN'},]
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    if(this.user.matriculeUtilisateur === 'RJlassi090') {
      localStorage.setItem('user', JSON.stringify(this.saved_users[0]));
    } else if(this.user.matriculeUtilisateur === 'AFali091') {
      localStorage.setItem('user', JSON.stringify(this.saved_users[1]));
    } if(this.user.matriculeUtilisateur === 'admin') {
      localStorage.setItem('user', JSON.stringify(this.saved_users[2]));
    }
  }

}
