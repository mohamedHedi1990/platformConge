import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from 'primeng';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: any[];

  // selectedCustomers: Customer[];

  // representatives: Representative[];

  statuses: any[];

  loading = true;

  // @ViewChild('dt') table: Table;

  constructor() { }

  ngOnInit() {
    this.loading = false;

    this.users = [
      {nom: 'Elsner', pernom: 'Amy', matricule: 'EA-090-SEA', email: 'a.elsner@gmail.com', creationDate: '30-08-2020', status: 'IN_PROGRESS', pictureTitle: 'ea.jpg'},
      {nom: 'Fali', pernom: 'Anna', matricule: 'FA-091-SEA', email: 'a.fali@gmail.com', creationDate: '30-08-2020', status: 'ACTIVE', pictureTitle: 'fa.jpg'},
      {nom: 'Javayant', pernom: 'Asya', matricule: 'JA-092-SEA', email: 'a.javayant@gmail.com', creationDate: '30-08-2020', status: 'BLOCKED', pictureTitle: 'ja.jpg'},
      {nom: 'Dominic', pernom: 'Bernardo', matricule: 'DB-093-SEA', email: 'b.dominic@gmail.com', creationDate: '30-08-2020', status: 'ACTIVE', pictureTitle: 'db.jpg'},
      {nom: 'Sharvill', pernom: 'Elwin', matricule: 'SE-094-SEA', email: 'e.sharvill@yahoo.com', creationDate: '30-08-2020', status: 'IN_PROGRESS', pictureTitle: 'se.jpg'},
      {nom: 'Bowcher', pernom: 'Ioni', matricule: 'BI-095-SEA', email: 'i.bowcher@gmail.com', creationDate: '30-08-2020', status: 'IN_PROGRESS', pictureTitle: 'bi.jpg'},
      {nom: 'Hajji', pernom: 'Rim', matricule: 'HR-096-SEA', email: 'r.hajji@gmail.com', creationDate: '30-08-2020', status: 'ACTIVE', pictureTitle: 'hr.jpg'},
      {nom: 'Shaw', pernom: 'Stephen', matricule: 'SS-097-SEA', email: 's.shaw@yahoo.com', creationDate: '30-08-2020', status: 'ACTIVE', pictureTitle: 'ss.jpg'},
      {nom: 'Feng', pernom: 'XuXue', matricule: 'FX-098-SEA', email: 'x.feng@gmail.com', creationDate: '30-08-2020', status: 'ACTIVE', pictureTitle: 'fx.jpg'},
      {nom: 'Magalhaes', pernom: 'Ivan', matricule: 'MI-099-SEA', email: 'i.magalhaes@gmail.com', creationDate: '30-08-2020', status: 'BLOCKED', pictureTitle: 'mi.jpg'},
    ];
  }

  /*
    onDateSelect(value) {
      this.table.filter(this.formatDate(value), 'date', 'equals')
    }
  */
  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day > 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }
  /*
    onRepresentativeChange(event) {
      this.table.filter(event.value, 'representative', 'in')
    }
  */
}
