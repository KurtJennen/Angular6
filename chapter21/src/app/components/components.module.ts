import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PaDiscountDisplayComponent } from './discountDisplay.component';
import { PaDiscountEditorComponent } from './discountEditor.component';
import { ProductFormComponent } from './productForm.component';
import { ProductTableComponent } from './productTable.component';
import { CommonModule } from '../common/common.module';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
    declarations: [PaDiscountDisplayComponent, PaDiscountEditorComponent, ProductFormComponent, ProductTableComponent],
    exports: [ ProductFormComponent, ProductTableComponent ]
})
export class ComponentsModule { }