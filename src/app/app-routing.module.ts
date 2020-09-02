import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './list-users/list-users.component';
import { ListCongesComponent } from './list-conges/list-conges.component';

const routes: Routes = [
  {path: '', component: ListUsersComponent},
  {path: 'conges', component: ListCongesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
