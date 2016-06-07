"use strict";
/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
var testing_1 = require('angular2/testing');
var cookie_service_js_1 = require("../app/cookie.service.js");
//Given
testing_1.describe('If a component needs to manage a cookie', function () {
    //When
    testing_1.describe('When a cookie needs to be retrieved or set', function () {
        var service = new cookie_service_js_1.CookieService();
        //Then
        testing_1.it('The cookie server should be able to set and get a test', function () {
            service.setCookie("testName", "testValue", 1, "");
            testing_1.expect(service.getCookie("testName")).toBe("testValue");
        });
    });
});
//# sourceMappingURL=cookie.service.spec.js.map