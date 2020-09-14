import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './list-users/list-users.component';
import { ListCongesComponent } from './list-conges/list-conges.component';
import {ListeAvanceSalaireComponent} from './liste-avance-salaire/liste-avance-salaire.component';
import {LoginComponent} from './login/login.component';
import {NewDemandeCongeComponent} from './new-demande-conge/new-demande-conge.component';
import {ListeFraisComponent} from './liste-frais/liste-frais.component';
import {AddNewUserComponent} from "./add-new-user/add-new-user.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'utilisateurs', component: ListUsersComponent},
  {path: 'conges', component: ListCongesComponent},
  {path: 'avances-salaire', component: ListeAvanceSalaireComponent},
  {path: 'nouveau-demande-conge', component: NewDemandeCongeComponent},
  {path: 'liste-frais', component: ListeFraisComponent},
  {path: 'nouveau-utilisateur', component: AddNewUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
