import { Injectable } from '@angular/core';
import { Model } from './repository.model';
import { RestDataSource } from './rest.datasource';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.model';

@Injectable()
export class ModelResolver{
    constructor(private model: Model, private dataSource: RestDataSource, private messages: MessageService) {
        console.log("ModelResolver constructor");
     }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
        //return this.model.getProducts().length == 0 ? this.dataSource.getData() : null;
        if (this.model.getProducts().length == 0) {
            console.log("ModelResolver resolve");
            this.messages.reportMessage(new Message("Loading data..."));
            return this.dataSource.getData();
        }
    }
}