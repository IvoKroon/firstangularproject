import {Component} from '@angular/core';

@Component({
    template: `<h1>{{pageTitle}}</h1>`,
})

export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
