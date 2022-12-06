import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from './directives/directives.module';
import { MaterialExampleModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivesModule,
        MaterialExampleModule,
        FlexLayoutModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivesModule,
        MaterialExampleModule,
        FlexLayoutModule,
    ]
})
export class SharedModule {
}
