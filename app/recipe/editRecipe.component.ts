import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe";

@Component({
    templateUrl:'./editRecipe.html',
    providers: [RecipeService]
})

export class EditRecipeComponent{
    private sub: any;
    private id:string;
    private recipe:Recipe;

    public recipeForm = this.fb.group({
        title: ["", Validators.required],
        desc: ["", Validators.required],
        type: ["", Validators.required]
    });

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private recipeService: RecipeService){

    }

    editRecipe(values:any){
        console.log(this.recipeForm.value);
        let recipe:Recipe = {
            _id:this.id,
            title:this.recipeForm.value.title,
            desc:this.recipeForm.value.desc,
            type:this.recipeForm.value.type,
        };

        this.recipeService.update(recipe).subscribe(result => {
            console.log(result);
            this.router.navigate(['/recipe/', this.id]);

        });
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            this.recipeService.getOne(this.id).subscribe(recipe => {
                    console.log(recipe);
                    this.recipe = recipe;
                    this.recipeForm = this.fb.group({
                        title: [recipe.title, Validators.required],
                        desc: [recipe.desc, Validators.required],
                        type: [recipe.type, Validators.required]
                    });
                },
                err => {
                    console.log("ERROR");
                }
            );
        });
    }
}
