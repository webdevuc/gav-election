import { TitlecaseDirective } from './titleCase.directive';
import { RestrictSpecialCharacterDirective } from './restrict-special-character.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './only-number.directive';
import { DeallowFirstSpaceDirective } from './deallow-first-space.directive';

const commanArray = [
  OnlyNumberDirective,
  DeallowFirstSpaceDirective,
  RestrictSpecialCharacterDirective,
  TitlecaseDirective
]

@NgModule({
  declarations: commanArray,
  exports: commanArray,
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
