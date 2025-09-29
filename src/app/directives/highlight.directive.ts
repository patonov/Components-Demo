import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[app-highlight]',
    standalone: true
})
export class HighLightDirective implements OnInit, OnDestroy {
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}


    ngOnInit(): void {
        //console.log('directive is loaded.');
        //console.log(this.elRef.nativeElement);
        this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');
        this.renderer.listen(this.elRef.nativeElement, 'mouseenter', this.mouseEventHandler.bind(this));
        this.renderer.listen(this.elRef.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this));
    }

    mouseEventHandler() {
      this.renderer.setStyle(this.elRef.nativeElement, 'background', 'green');  
      this.renderer.addClass(this.elRef.nativeElement, 'highlights');
    }

    mouseLeaveHandler(){
        this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');
        this.renderer.removeClass(this.elRef.nativeElement, 'highlights');
    }

    ngOnDestroy(): void {
        console.log('On destroy invoked.');
    }
}