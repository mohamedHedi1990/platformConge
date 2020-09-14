import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { ListCongesComponent } from './list-conges/list-conges.component';
import { MenuComponent } from './menu/menu.component';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { ListeAvanceSalaireComponent } from './liste-avance-salaire/liste-avance-salaire.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewDemandeCongeComponent } from './new-demande-conge/new-demande-conge.component';
import {CalendarModule} from "primeng";
import { ListeFraisComponent } from './liste-frais/liste-frais.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ListCongesComponent,
    MenuComponent,
    HorizontalMenuComponent,
    ListeAvanceSalaireComponent,
    LoginComponent,
    NewDemandeCongeComponent,
    ListeFraisComponent,
    AddNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
