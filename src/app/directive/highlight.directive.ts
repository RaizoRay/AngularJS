import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // constructor(private elementRef: ElementRef, private renderer: Renderer) { 
  //   // this.elementRef.nativeElement.style.backgroundColor = 'green';
  //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  // }
  @HostListener('mouseEnter') mouserOver() {

  };
  constructor() {}

}
