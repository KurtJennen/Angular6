import { Component } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private respository: ProductRepository) { }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.respository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.respository.getCategories();
    }

    changeCategory(newCatagory?: string) {
        this.selectedCategory = newCatagory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.respository.getProducts(this.selectedCategory).length / this.productsPerPage)).fill(0).map((x,i) => i + 1);
    }

    get pageCount(): number {
        return Math.ceil(this.respository.getProducts(this.selectedCategory).length / this.productsPerPage);
    }
}