import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Recipe} from './recipe';

@Injectable()
export class RecipeService {
    url:string = "http://localhost:8080/v1/recipes/";
    constructor(private http: Http) { }

    create(recipe:Recipe) {
        let body = new URLSearchParams();
        body.set('title', recipe.title);
        body.set('desc', recipe.desc);
        body.set('type', recipe.type);

        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        //
        // this.model = new DemoBean(id,num,str,d);
        // this.http.post('http://localhost:8080/create', JSON.stringify(this.model),{headers:headers}).map((res) => res.text())
        //     .subscribe(msg => this.msg = msg);

        return this.http.post(this.url, body)
            .map(res => res.json());
    }

    update(recipe:Recipe) {
        let body = new URLSearchParams();
        body.set('title', recipe.title);
        body.set('desc', recipe.desc);
        body.set('type', recipe.type);

        return this.http.put(this.url+recipe._id, body)
            .map(res => res.json());
    }

    remove(id: string): Observable<any[]>{
        let url = this.url + id;
        return this.http.delete(url)
            .map(res => res.json())
            .catch((error:any) => Observable.throw('aii Error'));
    }

    get() {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    getOne(id: string) {
        let url = this.url + id;
        return this.http.get(url)
            .map(res => res.json())
            .catch((error:any) => Observable.throw('aii Error'));
    }

}
