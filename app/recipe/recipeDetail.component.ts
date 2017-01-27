import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe";
// import {Router} from '@angular/router';


@Component({
    templateUrl: './recipeDetail.html',
    providers: [RecipeService]
})

export class RecipeDetailComponent implements OnInit, OnDestroy {
    id: string;
    pageTitle: string = 'Recipe Detail';
    recipe: Recipe;

    private sub: any;


    constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) {
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            this.recipeService.getOne(this.id).subscribe(recipe => {
                    console.log(recipe);
                    this.recipe = recipe;
                },
                err => {
                    console.log(err);
                }
            );
        });
    }

    removeRecipe() {
        console.log(this.id);
        this.recipeService.remove(this.id).subscribe(recipe => {
                this.router.navigate(['/recipe/']);
            },
            err => {
                this.router.navigate(['**']);
                console.log(err);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
