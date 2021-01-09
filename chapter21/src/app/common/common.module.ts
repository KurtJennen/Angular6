import { NgModule } from "@angular/core";
import { ModelModule } from '../model/model.module';
import { LogService } from './log.service';
import { DiscountService } from './discount.service';
import { VALUE_SERVICE, PaDisplayValueDirective } from './valueDisplay.directive';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaAtrrDirective } from './attr.directive';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { PaDiscountAmountDirective } from './discountAmount.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaStructureDirective } from './structure.directive';
import { PaModel } from './twoway.directive';
import { PaDiscountPipe } from './discount.pipe';

@NgModule({
    imports: [ModelModule],
    providers: [LogService, DiscountService, {provide: VALUE_SERVICE, useValue: "Apples"}],
    declarations: [PaAddTaxPipe, PaAtrrDirective, PaCategoryFilterPipe, PaCellColor, PaCellColorSwitcher,
        PaDiscountPipe, PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective, PaModel, PaDisplayValueDirective],
    exports: [PaAddTaxPipe, PaAtrrDirective, PaCategoryFilterPipe, PaCellColor, PaCellColorSwitcher,
        PaDiscountPipe, PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective, PaModel, PaDisplayValueDirective]
})
export class CommonModule { }