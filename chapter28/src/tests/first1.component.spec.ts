import { TestBed, ComponentFixture, async, fakeAsync, tick } from "@angular/core/testing";
import { First1Component } from "../app/ondemand/first1.component";
import { Product } from 'src/app/model/product.model';
import { Model } from 'src/app/model/repository.model';
import { DebugElement, Component, ViewChild, Injectable } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Injectable()
class MockDataSource {
    public data = [
        new Product(1, "test1", "Soccer", 100),
        new Product(2, "test2", "Chess", 100),
        new Product(3, "test3", "Soccer", 100),
    ];
    getData(): Observable<Product[]> {
        return new Observable<Product[]>(obs => {
            setTimeout(() => obs.next(this.data), 1000);
        })
    }
}

describe("FirstComponent", () => {
    let fixture: ComponentFixture<First1Component>;
    let component: First1Component;
    let dataSource = new MockDataSource();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [First1Component],
            providers: [
                { provide: RestDataSource, useValue: dataSource }
            ]
        });
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(First1Component);
            component = fixture.componentInstance;
        });
    }));

    it("is defined", () => {
        expect(component).toBeDefined()
    });

    it("performs async op", fakeAsync(() => {
        dataSource.data.push(new Product(100, "test100", "Soccer", 100));
        fixture.detectChanges();
        for (let i = 0; i < 1001; i++) {
            tick(1);
        }
        fixture.whenStable().then(() => {
            expect(component.getProducts().length).toBe(3);
        });
    }));
});