/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {CatalogueService} from "../app/catalogue.service.js";

//Given
describe('If component asks for the catalogue ', () => {
    //When 
    describe('When the location id is passed ', () => {
        let service:CatalogueService = new CatalogueService();
    
        let catalogue= [{key:1, category:"Sports", value:"Arsenal TV", location:"LONDON"},
                    {key:2, category:"Sports", value:"Chelsea TV", location:"LONDON"},
                    {key:4, category:"News", value:"Sky News"},
                    {key:5, category:"News", value:"Sky Sports News"}];
    
        it('The calogue service returns the product related to a specific location only', () => {
            expect(service.getCatalogue("LONDON")).toEqual(catalogue);
        });
     });
});