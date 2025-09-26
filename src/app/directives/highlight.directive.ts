import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[app-highlight]',
    standalone: true
})
export class HighLightDirective implements OnInit {
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}


    ngOnInit(): void {
        console.log('directive is loaded.');
        console.log(this.elRef.nativeElement);
        this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');
    }
}