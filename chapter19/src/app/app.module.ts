import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ProductComponent } from './component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAtrrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';
import { PaStructureDirective } from './structure.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { ProductTableComponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { PaToggleView } from './toggleView.component';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { PaDiscountDisplayComponent } from './discountDisplay.component';
import { PaDiscountEditorComponent } from './discountEditor.component';
import { DiscountService } from './discount.service';
import { PaDiscountPipe } from './discount.pipe';
import { PaDiscountAmountService } from './discountAmount.directive';
import { SimpleDataSource } from './datasource.model';
import { Model } from './repository.model';

//import { AppComponent } from './app.component';

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    ProductComponent, PaAtrrDirective, PaModel, PaStructureDirective, PaIteratorDirective, PaCellColor, PaCellColorSwitcher,
    ProductTableComponent, ProductFormComponent, PaToggleView, PaAddTaxPipe, PaCategoryFilterPipe,
    PaDiscountDisplayComponent, PaDiscountEditorComponent, PaDiscountPipe, PaDiscountAmountService
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "nl-BE"}, DiscountService, SimpleDataSource, Model],
  bootstrap: [ProductComponent]
})
export class AppModule { }
