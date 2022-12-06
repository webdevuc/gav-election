import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictSpecialCharacter]'
})
export class RestrictSpecialCharacterDirective {
  constructor() { }
  @HostListener('keypress', ['$event'])
  onInputChange(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode != 32) {
      return false;
    }
    return true;
  }
}
