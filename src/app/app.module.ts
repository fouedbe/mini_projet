import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AddetudiantComponent } from './addetudiant/addetudiant.component';
import { AlletudiantComponent } from './alletudiant/alletudiant.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CoursComponent } from './cours/cours.component';
import { PythonComponent } from './python/python.component';
import { AngularComponent } from './angular/angular.component';
import { AddcoursComponent } from './addcours/addcours.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfilComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    AdminComponent,
    LoginadminComponent,
    AddetudiantComponent,
    AlletudiantComponent,
    HomeadminComponent,
    CoursComponent,
    PythonComponent,
    AngularComponent,
    AddcoursComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
