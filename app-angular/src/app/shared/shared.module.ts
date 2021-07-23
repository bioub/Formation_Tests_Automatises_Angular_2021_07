import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
  ],
  declarations: [SelectComponent],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SelectComponent
  ]
})
export class SharedModule { }
