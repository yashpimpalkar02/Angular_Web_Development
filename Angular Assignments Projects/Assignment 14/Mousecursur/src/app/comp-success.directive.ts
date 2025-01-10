import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective 
{
  constructor(private el: ElementRef) 
  {}

  @HostListener('mouseenter') onMouseEnter() 
  {
    this.el.nativeElement.style.color = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() 
  {
    this.el.nativeElement.style.color = 'black';
  }
}
