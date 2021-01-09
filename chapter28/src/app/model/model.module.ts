import { NgModule } from "@angular/core";
import { Model } from './repository.model';
import { StaticDataSource } from './static.datasource';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { RestDataSource, REST_URL } from './rest.datasource';
import { ModelResolver } from './model.resolver';

@NgModule({
    imports: [HttpClientModule, HttpClientJsonpModule],
    //providers: [Model, StaticDataSource]
    providers: [Model, RestDataSource, ModelResolver, {provide: REST_URL, useValue: `http://${location.hostname}:3500/products`}]
})
export class ModelModule { }