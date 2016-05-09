/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {CookieService} from "../app/cookie.service.js";

//Given
describe('If a component needs to manage a cookie', () => {
    //When
    describe('When a cookie needs to be retrieved or set', () => {
        let service:CookieService = new CookieService();
        //Then
        it('The cookie server should be able to set and get a test', () => {
            service.setCookie("testName","testValue",1,"");
            expect(service.getCookie("testName")).toBe("testValue");
        });
    });
});