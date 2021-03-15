import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]'
})
export class CustomeStyleDirective {

  constructor(private el:ElementRef, private ef:ElementRef) {
    el.nativeElement.style.color="red"
    ef.nativeElement.style.display="none"
   }

}
