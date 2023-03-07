import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {MentionsLegalesComponent} from "./mentions-legales/mentions-legales.component";
import {CocktailShowComponent} from "./cocktail-show/cocktail-show.component";
import {CocktailsDetailsComponent} from "./cocktails-details/cocktails-details.component";
import {IngredientShowComponent} from "./ingredient-show/ingredient-show.component";
import {LoginComponent} from "./login/login.component";
import {QuiSommesNousComponent} from "./qui-sommes-nous/qui-sommes-nous.component";
import {CommunauteComponent} from "./communaute/communaute.component";
import {MojitoComponent} from "./mojito/mojito.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mentions_legales', component: MentionsLegalesComponent },
  { path: 'cocktail_show', component: CocktailShowComponent },
  { path: 'cocktail_show/:details', component: CocktailsDetailsComponent },
  { path: 'ingredient_show', component: IngredientShowComponent},
  { path: 'login', component: LoginComponent},
  { path: 'qui_sommes_nous', component: QuiSommesNousComponent},
  { path: 'communaute', component: CommunauteComponent},
  { path: 'mojito', component: MojitoComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
