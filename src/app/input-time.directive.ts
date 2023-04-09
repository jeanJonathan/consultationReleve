import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector: '[appInputTime]'
})
export class InputTimeDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:InputEvent) {
    const input = this.el.nativeElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 4) {
      trimmed = trimmed.substr(0, 4);
    }

    if (trimmed.length === 2 && event.data !== null && event.data !== ':') {
      trimmed = trimmed + ':';
    }

    input.value = trimmed;
  }

}
