import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CollaresComponent } from './shop/collares/collares.component';
import { ZarcillosComponent } from './shop/zarcillos/zarcillos.component';
import { BrazaletesComponent } from './shop/brazaletes/brazaletes.component';
import { OtrosComponent } from './shop/otros/otros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    CheckoutComponent,
    CollaresComponent,
    ZarcillosComponent,
    BrazaletesComponent,
    OtrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
