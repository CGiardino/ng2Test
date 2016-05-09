/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {ProductsService} from "../app/products.service.js";

//Given
describe('If a component asks for arrays of products orginized by category', () => {
    
    //When
    describe('When the product service is called with an unordered cataloge', () => {
        let service:ProductsService = new ProductsService();
        let catalouge:Array<Object> = [{key:1, category:"Test", value:"Arsenal TV", location:"LONDON"},
                    {key:2, category:"Test2", value:"Chelsea TV", location:"LONDON"},
                    {key:3, category:"Test", value:"Liverpool TV", location:"LIVERPOOL"},
                    {key:4, category:"Test2", value:"Sky News"},
                    {key:5, category:"Test", value:"Sky Sports News"}];
        let expectedProducts:Array<Object> = 
            [ [ Object({ key: 1, category: 'Test', value: 'Arsenal TV', location: 'LONDON' }), Object({ key: 3, category: 'Test', value: 'Liverpool TV', location: 'LIVERPOOL' }), Object({ key: 5, category: 'Test', value: 'Sky Sports News' }) ], 
            [ Object({ key: 2, category: 'Test2', value: 'Chelsea TV', location: 'LONDON' }), Object({ key: 4, category: 'Test2', value: 'Sky News' }) ] ];
        
        //Then   
        it('Product service should return an array of array where each array belongs to the same category', () => {
            expect(service.getProducts(catalouge)).toEqual(expectedProducts);
        });
    });
});