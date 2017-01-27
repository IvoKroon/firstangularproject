import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe"
import {Router} from '@angular/router';


@Component({
    templateUrl: './createRecipe.html',
    providers:[RecipeService]
})

export class CreateRecipeComponent {

    public recipeForm = this.fb.group({
        title: ["", Validators.required],
        desc: ["", Validators.required],
        type: ["", Validators.required]
    });

    constructor(private router: Router, private fb: FormBuilder, private recipeService:RecipeService) {
    }

    createNewRecipe(event: any) {
        console.log(this.recipeForm.value.title);

        let recipe:Recipe = {
            _id:null,
            title:this.recipeForm.value.title,
            desc:this.recipeForm.value.desc,
            type:this.recipeForm.value.type,
        };

        this.recipeService.create(recipe)
            .subscribe(data => {
                console.log(data);
                this.router.navigate(['recipe']);

            });
        this.recipeForm.reset();
        // let recipe:Recipe ={};
        // recipe.ti
        // this.recipeService.create()
    }
}
