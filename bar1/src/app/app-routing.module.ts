import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {MentionsLegalesComponent} from "./mentions-legales/mentions-legales.component";
import {CocktailShowComponent} from "./cocktail-show/cocktail-show.component";
import {CocktailsDetailsComponent} from "./cocktails-details/cocktails-details.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mentions_legales', component: MentionsLegalesComponent },
  { path: 'cocktail_show', component: CocktailShowComponent },
  { path: 'cocktail_show/:details', component: CocktailsDetailsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
