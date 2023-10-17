import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AddetudiantComponent } from './addetudiant/addetudiant.component';
import { AlletudiantComponent } from './alletudiant/alletudiant.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursComponent } from './cours/cours.component';
import { PythonComponent } from './python/python.component';
import { AngularComponent } from './angular/angular.component';
import { AddcoursComponent } from './addcours/addcours.component';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [
  {path:'profil/:id',component:ProfilComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'loginadmin',component:LoginadminComponent},
  {path:'addetudiant',component:AddetudiantComponent},
  {path:'alletudiant',component:AlletudiantComponent},
  {path:'homeadmin',component:HomeadminComponent},
  {path:'cours',component:CoursComponent},
  {path:'python',component:PythonComponent},
  {path:'angular/:id',component:AngularComponent},
  {path:'addcours',component:AddcoursComponent},
  {path:'navbar',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
