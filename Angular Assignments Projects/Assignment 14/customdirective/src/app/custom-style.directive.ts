import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
   
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
  }
}
