import { NgControl } from '@angular/forms';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDeallowFirstSpace]'
})
export class DeallowFirstSpaceDirective {

  constructor(
    public ngControl: NgControl,
  ) { }
  @HostListener('keydown', ['$event'])
  onInputChange(event) {
    if (event.which === 32 && !event.target.value.length) {
      event.preventDefault();
    }

  }
}
