import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
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
  }

}
