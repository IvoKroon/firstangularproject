import {Component} from '@angular/core';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe'

@Component({
    templateUrl: './recipe.html',
    providers:[RecipeService],
})

export class RecipeComponent {
    pageTitle: string = 'Recipe';
    recipes:Recipe;

    constructor(private recipeService:RecipeService){
        this.recipeService.get().subscribe(recipe => {
            console.log(recipe.items);
            this.recipes = recipe.items;
        });
    }

}
