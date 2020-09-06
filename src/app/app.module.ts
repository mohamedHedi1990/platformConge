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
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ListCongesComponent,
    MenuComponent,
    HorizontalMenuComponent,
    ListeAvanceSalaireComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
