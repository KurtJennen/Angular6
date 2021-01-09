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
import { LogService, LOG_SERVICE, LogLevel, LOG_LEVEL } from './log.service';
import { VALUE_SERVICE, PaDisplayValueDirective } from './valueDisplay.directive';

//import { AppComponent } from './app.component';

registerLocaleData(localeNl);

//let logger = new LogService();
//logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
  declarations: [
    ProductComponent, PaAtrrDirective, PaModel, PaStructureDirective, PaIteratorDirective, PaCellColor, PaCellColorSwitcher,
    ProductTableComponent, ProductFormComponent, PaToggleView, PaAddTaxPipe, PaCategoryFilterPipe,
    PaDiscountDisplayComponent, PaDiscountEditorComponent, PaDiscountPipe, PaDiscountAmountService, PaDisplayValueDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "nl-BE"}, DiscountService, SimpleDataSource, Model, 
  // {provide: LogService, useClass: LogService },
  // {provide: "logger", useClass: LogService },
  // {provide: LOG_SERVICE, useClass: LogService },
  // {provide: LOG_SERVICE, useClass: SpecialLogService }
  // {provide: LOG_SERVICE, useClass: LogService, multi: true },
  // {provide: LOG_SERVICE, useClass: SpecialLogService, multi: true },
  // {provide: LogService, useValue: logger },
  /* {
    provide: LogService, useFactory: () => {
      let logger = new LogService();
      logger.minimumLevel = LogLevel.DEBUG;
      return logger;
    }
  } */
  {provide: LOG_LEVEL, useValue: LogLevel.ERROR },
  {provide: "debugLevel", useExisting: LOG_LEVEL },
  {
    provide: LogService, 
    //deps: [LOG_LEVEL],
    deps: ["debugLevel"],
    useFactory: (level) => {
      let logger = new LogService();
      logger.minimumLevel = level;
      return logger;
    }
  },
  {provide: VALUE_SERVICE, useValue: "Apples" }
  ],
  bootstrap: [ProductComponent]
})
export class AppModule { }
