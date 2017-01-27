import {Component} from '@angular/core';
// import {Recipe} from './recipe/recipe';
// import {RecipeService} from './recipe/recipe.service';

//
// @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css'],
//     providers:[RecipeService]
// })

@Component({
    selector: 'pm-app',
    templateUrl:'./navigation/navigationBar.template.html',
})

export class AppComponent {
    title = 'app works!';
}
//     user: user;
//     recipes:Recipe[];
//
//     constructor(private recipeService:RecipeService) {
//         this.user = {name: "Ivo", lastName: "Kroon"};
//         //get all the recipes
//         this.recipeService.get().subscribe(recipe => {
//             console.log(recipe.items);
//             this.recipes = recipe.items;
//         });
//     }
//
//     removeBook(arrayRow:any){
//         console.log("clicked");
//         let id = this.recipes[arrayRow]._id;
//         this.recipes.splice(arrayRow,1);
//         this.recipeService.remove(id).subscribe(
//             data => console.log(data),
//             err => console.log(err),
//         );
//     }
// }
//
// interface user {
//     name: string;
//     lastName: string;
// }
