import {Component,Input,EventEmitter,Output} from 'angular2/core'

@Component({
    selector: 'like-icon',
    template: `
    <i class="glyphicon glyphicon-heart"
    [class.highlighted]="isLiked"
    (click)="onClick()">
    </i> 
    <span>{{count}}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted {
            color: deeppink;
        }
    `]
})

export class LikeComponent{
    @Input() isLiked = false;

    @Output() change = new EventEmitter();
    count = 10;
    onClick() {
        this.isLiked = !this.isLiked;
        this.count += this.isLiked ? 1 : -1; 
    }
}