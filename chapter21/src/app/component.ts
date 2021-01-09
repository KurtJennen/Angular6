import { Component, ApplicationRef } from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "template.html"
    //styles: ["/deep/ div { border: 2px black solid; font-style:italic}"]
})
export class ProductComponent {
    //constructor(private model: Model) {}
    //model: Model = new Model();
    //form: ProductFormGroup = new ProductFormGroup();

    /* getProduct(key: number): Product {
        return this.model.getProduct(key);
    } */

   /*  getProducts(): Product[] {
        return this.model.getProducts();
    } */

    //newProduct: Product = new Product();

   /*  addProduct(p: Product) {
        this.model.saveProduct(p);
    } */

    /* deleteProduct(key: number) {
        this.model.deleteProduct(key);
    } */

    //formSubmitted: boolean = false;

    /* submitForm(form: NgForm) {
        this.formSubmitted = true;
        if(form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    } */

    /* getFormValidationMessages(form: NgForm): string[] {
        let messages: string[] = [];
        Object.keys(form.controls).forEach(k => {
            this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
        })        
        return messages;
    } */

    //showTable: boolean = true;
}