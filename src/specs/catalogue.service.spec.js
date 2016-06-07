"use strict";
/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
var testing_1 = require('angular2/testing');
var catalogue_service_js_1 = require("../app/catalogue.service.js");
//Given
testing_1.describe('If component asks for the catalogue ', function () {
    //When 
    testing_1.describe('When the location id is passed ', function () {
        var service = new catalogue_service_js_1.CatalogueService();
        var catalogue = [{ key: 1, category: "Sports", value: "Arsenal TV", location: "LONDON" },
            { key: 2, category: "Sports", value: "Chelsea TV", location: "LONDON" },
            { key: 4, category: "News", value: "Sky News" },
            { key: 5, category: "News", value: "Sky Sports News" }];
        testing_1.it('The calogue service returns the product related to a specific location only', function () {
            testing_1.expect(service.getCatalogue("LONDON")).toEqual(catalogue);
        });
    });
});
//# sourceMappingURL=catalogue.service.spec.js.map