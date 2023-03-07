import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CocktailShowComponent } from './cocktail-show/cocktail-show.component';
import { IngredientShowComponent } from './ingredient-show/ingredient-show.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MentionsLegalesComponent } from "./mentions-legales/mentions-legales.component";
import {CocktailsDetailsComponent} from "./cocktails-details/cocktails-details.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CocktailShowComponent,
    IngredientShowComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    MentionsLegalesComponent,
    CocktailsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
