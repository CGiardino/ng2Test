/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {LocationService} from "../app/customerLocation.service.js";
 
describe('MyList Tests', () => {
    let service:LocationService = new LocationService();
    it('Should get 5 dogs', () => {
        expect(service.getLocation(1)).toBe("LONDON");
    });
});