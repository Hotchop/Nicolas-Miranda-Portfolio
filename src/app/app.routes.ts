import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SecretComponent } from './pages/secret/secret.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'proyects',component:ProyectsComponent},
    {path:'contact',component:ContactComponent},
    {path:'secret',component:SecretComponent},
    {path:'**',redirectTo:'home'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }