import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatCommonModule, MatSelectModule, MatCardModule, MatSliderModule, MatPaginatorModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatSliderModule,
    MatPaginatorModule,
    MatStepperModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule


  ],
  exports:[
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatSliderModule,
    MatPaginatorModule,
    MatStepperModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
