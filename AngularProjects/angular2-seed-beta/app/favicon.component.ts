import {Component,Input,EventEmitter,Output} from 'angular2/core'


@Component({
    selector:'favicon',
    templateUrl: `app/favorite.template.html`, 
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
})

export class FaviconComponent{
   @Input() isFavorite= false;
   @Output() change = new EventEmitter();
    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}
