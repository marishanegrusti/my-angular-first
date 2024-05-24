import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective { //implements OnInit
  @Input() color: string | undefined;
  
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.color;
}
}
