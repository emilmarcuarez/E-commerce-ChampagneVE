import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { CollaresComponent } from './shop/collares/collares.component';
import { ZarcillosComponent } from './shop/zarcillos/zarcillos.component';
import { BrazaletesComponent } from './shop/brazaletes/brazaletes.component';
import { OtrosComponent } from './shop/otros/otros.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'shop', component:ShopComponent, children:[
    {path:'collares', component: CollaresComponent},
    {path:'zarcillos', component: ZarcillosComponent},
    {path:'brazaletes', component: BrazaletesComponent},
    {path:'otros', component: OtrosComponent}
  ]},
  {path:'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path:'contact', component: ContactComponent},
   {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
