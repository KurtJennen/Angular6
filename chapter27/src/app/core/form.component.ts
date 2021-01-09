import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { SharedState, MODES, SHARED_STATE } from './sharedState.model';
import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, skipWhile } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})
export class FormComponent {
    product: Product = new Product();
    editing: boolean = false;
    //lastId: number;
    originalProduct = new Product();

    //constructor(private model: Model, @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
        //stateEvents
        //.pipe(map(state => new SharedState(state.mode, state.id == 5 ? 1 : state.id)))
        //.pipe(filter(state => state.id != 3))
        //.pipe(distinctUntilChanged((firstState, secondState) => firstState.mode == secondState.mode && firstState.id == secondState.id))
        //.pipe(skipWhile(state => state.mode == MODES.EDIT))
        // .subscribe((update) => {
        //     console.log('Constuctor SHARED_STATE');
        //     this.product = new Product();
        //     if (update.id != undefined) {
        //         Object.assign(this.product, this.model.getProduct(update.id));
        //     }
        //     this.editing = update.mode == MODES.EDIT;
        // })
       /*  stateEvents.pipe(map(state => state.mode == MODES.EDIT ? state.id : -1))
        .pipe(filter(id => id != 3))
        .pipe(distinctUntilChanged())
        .subscribe((id) => {
            this.editing = id != -1;
            this.product = new Product();
            if (id != -1) {
                Object.assign(this.product, this.model.getProduct(id));
            }
        }) */
    //}

    constructor(private model: Model, private activeRoute: ActivatedRoute, private router: Router) {
        //this.editing = activeRoute.snapshot.url[1].path == "edit";
        activeRoute.params.subscribe(params => {
            this.editing = params["mode"] == "edit";
            let id = params["id"];
            if (id != null) {
                Object.assign(this.product, model.getProduct(id) || new Product());
                Object.assign(this.originalProduct, this.product);
            }
        })
        // this.editing = activeRoute.snapshot.params["mode"] == "edit";
        // let id = activeRoute.snapshot.params["id"];
        // if (id != null) {
        //     //let name = activeRoute.snapshot.params["name"];
        //     //let category = activeRoute.snapshot.params["category"];
        //     //let price = activeRoute.snapshot.params["price"];

        //     //if (name != null && category != null && price != null) {
        //     //     this.product.id = id;
        //     //     this.product.name = name;
        //     //     this.product.category = category;
        //     //     this.product.price = Number.parseFloat(price);
        //     // } else {
        //         Object.assign(this.product, model.getProduct(id) || new Product());
        //     // }
        // }
    }

    /* get editing(): boolean {
        return this.state.mode == MODES.EDIT;
    } */

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            //this.product = new Product();
            //form.reset();
            this.originalProduct = this.product;
            this.router.navigateByUrl("/");
        }
    }

    // resetForm() {
    //     this.product = new Product();
    // }

    /* ngDoCheck() {
        if (this.lastId != this.state.id) {
            this.product = new Product();
            if (this.state.mode == MODES.EDIT) {
                Object.assign(this.product, this.model.getProduct(this.state.id));
            }
            this.lastId = this.state.id;
        }
    } */
}