import { Directive, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef, Input, SimpleChange } from "@angular/core";
import { DiscountService } from './discount.service';

@Directive({
    selector: "td[pa-price]",
    exportAs: "discount"
})
export class PaDiscountAmountService {
    private differ: KeyValueDiffer<any, any>;

    constructor(private keyValueDiffers: KeyValueDiffers, private changeDetector: ChangeDetectorRef, private discount: DiscountService) {}

    @Input("pa-price")
    originalPrice: number;

    discountAmount: number;

    ngOnInit() {
        this.differ = this.keyValueDiffers.find(this.discount).create();
    }

    ngOnChanges(changes: {[property: string]: SimpleChange}) {
        console.log("ngOnChanges");
        if (changes["originalPrice"] != null) {
            this.updateValue();
        }
    }

    ngDoCheck() {
        console.log("ngDoCheck");
        if (this.differ.diff(this.discount) != null) {
            this.updateValue();
        }
    }

    private updateValue() {
        this.discountAmount = this.originalPrice - this.discount.applyDiscount(this.originalPrice);
    }
}