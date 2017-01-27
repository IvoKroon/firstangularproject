import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipeDetailComponent} from "./recipe/recipeDetail.component";
import {ErrorPageComponent} from "./404/errorPage.component";
import {CreateRecipeComponent} from "./recipe/createRecipe.component";
import {EditRecipeComponent} from "./recipe/editRecipe.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {path: 'recipe', component: RecipeComponent},
            {path: 'create', component: CreateRecipeComponent},
            {path: 'recipe/:id', component: RecipeDetailComponent},
            {path: 'edit/:id', component: EditRecipeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', component:ErrorPageComponent, pathMatch: 'full'}
        ]),
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        RecipeComponent,
        RecipeDetailComponent,
        ErrorPageComponent,
        CreateRecipeComponent,
        EditRecipeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
