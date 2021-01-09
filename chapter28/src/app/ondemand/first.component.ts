import { Component, HostListener, Output, EventEmitter, Input } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
    selector: "first",
    //template: `<div class="bg-primary text-white p-2">First Component</div>`
    // template: `<div class="bg-primary p-a-1">
    //                 There are
    //                     <span class="strong"> {{getProducts().length}} </span>
    //                 products
    //             </div>`
    templateUrl: "first.component.html"
})
export class FirstComponent { 
    //constructor(private repository: Model) { }

    category: string = "Soccer";
    highlighted: boolean = false;

    //@Output("pa-highlight")
    //change = new EventEmitter<boolean>();

    @Input("pa-model")
    model: Model;

    getProducts(): Product[] {
        //return this.repository.getProducts().filter(p => p.category == this.category);
        return this.model == null ? [] : this.model.getProducts().filter(p => p.category == this.category);
    }

    // @HostListener("mouseenter", ["$event.type"])
    // @HostListener("mouseleave", ["$event.type"])
    // setHighlight(type: string) {
    //     this.highlighted = type == "mouseenter";
    //     this.change.emit(this.highlighted);
    // }
}