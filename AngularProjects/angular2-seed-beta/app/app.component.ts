import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FaviconComponent} from './favicon.component'
import {LikeComponent} from './like.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>Angular 2 </h1>
    <i class="glyphicon glyphicon-star"></i>
    <favicon [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favicon>
    <like-icon [isLiked]="post.isLiked" (change)="onLikedChange($event)"></like-icon>`,
    directives: [CoursesComponent,AuthorsComponent,FaviconComponent,LikeComponent]
})
export class AppComponent {

    post = {
        title: "Title",
        isFavorite: true
    } 

    onFavoriteChange($event){
        console.log($event);
    }

    onLikedChange($event) {
        console.log("LikeChange");
        console.log($event);
    }
}