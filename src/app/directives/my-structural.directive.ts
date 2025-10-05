import { Directive, Input, input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  standalone: true
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;
  constructor(private templateRef: TemplateRef<any>, private vsRef: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.appMyStructural);

    if(this.appMyStructural){
      this.vsRef.createEmbeddedView(this.templateRef);
    } else {
      this.vsRef.clear();
    }
  }

  
}
