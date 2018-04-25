import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
        <h4>{{ pageTitle }}</h4>
    `
})

export class AppComponent {
    pageTitle: string =  'Welcome to the my TOC';
}