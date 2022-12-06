import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
@Directive({
    selector: '[appTitleCase]'
})
export class TitlecaseDirective {
    constructor(
        public ngControl: NgControl,
        public titleCase: TitleCasePipe
    ) { }

    @HostListener('ngModelChange', ['$event'])
    onInputChange(value) {
        if (value != null && value != "" && value != undefined && value != "undefined") {
            const arrStr = value.toLowerCase().split(' ');
            const titleCaseStr = arrStr.reduce((accumulatedStr, currentStr) => {
                const spaceBetweenWords = (accumulatedStr ? ' ' : '');
                return accumulatedStr += spaceBetweenWords + (currentStr.charAt(0).toUpperCase() + currentStr.slice(1));
            }, '');

            this.ngControl.valueAccessor.writeValue(titleCaseStr);
        }


    }

}