import { Directive, Input, HostBinding, SimpleChange, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({
    selector: "input[paModel]",
    exportAs: "paModel"
})
export class PaModel {

    direction: string = "None";

    @Input("paModel")
    modelProperty: string;

    @HostBinding("value")
    fieldValue: string = "";

    ngOnChanges(changes: {[property: string]: SimpleChange}) {
        console.log("ngOnChanges");
        let change = changes["modelProperty"];
        if (change.currentValue != this.fieldValue) {
           this.fieldValue = change.currentValue || "";
           this.direction = "Model";
        }
        console.log(this.fieldValue);
    }

    @Output("paModelChange")
    update = new EventEmitter<string>();

    @HostListener("input", ["$event.target.value"])
    updateValue(newValue: string) {
        console.log("updateValue");
        this.fieldValue = newValue;
        this.update.emit(newValue);
        this.direction = "Element";
    }
}