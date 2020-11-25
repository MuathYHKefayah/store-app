import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private el: ElementRef) { }


  @HostListener('mouseover')
  mouseover(){
    this.highlight('#00FF00');
  }

  @HostListener('mouseout')
  mouseout(){
    this.highlight('#00FFDE');
  }

  @HostListener('click')
  click(){
    this.highlight(null);
  }


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

    
}
