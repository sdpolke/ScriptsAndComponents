import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FaviconComponent} from './favicon.component'

@Component({
    selector: 'my-app',
    template: `
    
    <h1>Angular 2 </h1>
    <favicon [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favicon>`,
    
    directives: [CoursesComponent,AuthorsComponent,FaviconComponent]
})
export class AppComponent {

    post = {
        title: "Title",
        isFavorite: true
    } 

    onFavoriteChange($event){
        console.log($event);
    }
}