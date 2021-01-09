import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { SharedState, MODES, SHARED_STATE } from './sharedState.model';
import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, skipWhile } from 'rxjs/operators';

@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})
export class FormComponent {
    product: Product = new Product();
    editing: boolean = false;
    //lastId: number;

    constructor(private model: Model, @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
        stateEvents.pipe(map(state => new SharedState(state.mode, state.id == 5 ? 1 : state.id)))
        .pipe(filter(state => state.id != 3))
        .pipe(distinctUntilChanged((firstState, secondState) => firstState.mode == secondState.mode && firstState.id == secondState.id))
        .pipe(skipWhile(state => state.mode == MODES.EDIT))
        .subscribe((update) => {
            this.product = new Product();
            if (update.id != undefined) {
                Object.assign(this.product, this.model.getProduct(update.id));
            }
            this.editing = update.mode == MODES.EDIT;
        })
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
    }

    /* get editing(): boolean {
        return this.state.mode == MODES.EDIT;
    } */

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new Product();
            form.reset();
        }
    }

    resetForm() {
        this.product = new Product();
    }

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