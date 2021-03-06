import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';
import { LogService } from '../common/log.service';

@Component({
    selector: "paProductTable",
    //template: "<div>This is the table component</div>"
    /* template: `<div class='bg-info p-2'>
                    This is a multiline template
                </div>` */
    templateUrl: "productTable.component.html",
    providers: [LogService]
})
export class ProductTableComponent {
    //discounter: DiscountService = new DiscountService();

    constructor(private dataModel: Model) { }

   /*  @Input("model")
    dataModel: Model; */

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

    showTable: boolean = true;

    /* @ViewChildren(PaCellColor)
    viewChildren: QueryList<PaCellColor>;

    ngAfterViewInit() {
        this.viewChildren.changes.subscribe(() => {
            this.updateViewChildren();
        });
        this.updateViewChildren();
    }

    private updateViewChildren() {
        setTimeout(() => {
            this.viewChildren.forEach((child, index) => {
                child.setColor(index % 2 ? true : false);
            })
        }, 0);
    } */

    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156800000;
}