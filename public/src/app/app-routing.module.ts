import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PrincipalNavComponent } from './components/principal-nav/principal-nav.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'home',
    component: PrincipalNavComponent,
    data: { title: 'Rabbit | Home' },
    children: [
      {path: '', redirectTo: 'home/principal', pathMatch: 'full'},
      {path: 'principal', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
