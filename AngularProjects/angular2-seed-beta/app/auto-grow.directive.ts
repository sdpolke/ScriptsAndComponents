
import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective{

    constructor(private ele: ElementRef , private renderer : Renderer) {

    }
    onFocus(){
        this.renderer.setElementStyle(this.ele.nativeElement,'width', '200');
    }

    onBlur() {
        this.renderer.setElementStyle(this.ele.nativeElement,'width', '100');
    }
}