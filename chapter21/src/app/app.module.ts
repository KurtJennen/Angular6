import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { ModelModule } from './model/model.module';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';
import { ProductTableComponent } from './components/productTable.component';
import { ProductFormComponent } from './components/productForm.component';

//import { AppComponent } from './app.component';

registerLocaleData(localeNl);

//let logger = new LogService();
//logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, ModelModule, CommonModule, ComponentsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "nl-BE"}],
  bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }
