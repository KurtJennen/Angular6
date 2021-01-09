import { Injectable } from "@angular/core";
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class Model {
    //private products: Product[];
    private products: Product[] = new Array<Product>();
    private locator = (p: Product, id: number) => p.id == id;

    /* constructor(private dataSource: StaticDataSource) {
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => this.products.push(p));
    } */
    constructor(private dataSource: RestDataSource) {
        console.log('Model constructor');
        this.dataSource.getData().subscribe(data => {
            console.log('Model subscribe');
            this.products = data;
        });
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => this.locator(p, id));
    }

    saveProduct(product: Product) {
        if (product.id == 0 || product.id == null) {
            this.dataSource.saveProduct(product).subscribe(p => {
                console.log('Save');
                this.products.push(p);
            });
        } else {
            this.dataSource.updateProduct(product).subscribe(p => {
                console.log('Update');
                let index = this.products.findIndex(item => this.locator(item, p.id));
                this.products.splice(index, 1, p);
            });
        }
    }

    deleteProduct(id: number) {
        this.dataSource.deleteProduct(id).subscribe(() => {
            console.log('Delete');
            let index = this.products.findIndex(p => this.locator(p, id));
            if (index > -1) {
                this.products.splice(index, 1);
            }
        });
    }

    /* private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    } */

    getNextProductId(id: number): number {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            return this.products[this.products.length > index + 2 ? index + 1 : 0].id;
        } else {
            return id || 0;
        }
    }

    getPreviousProductId(id: number): number {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            return this.products[index > 0 ? index - 1 : this.products.length - 1].id;
        } else {
            return id || 0;
        }
    }
}