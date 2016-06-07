"use strict";
/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
var testing_1 = require('angular2/testing');
var products_service_js_1 = require("../app/products.service.js");
//Given
testing_1.describe('If a component asks for arrays of products orginized by category', function () {
    //When
    testing_1.describe('When the product service is called with an unordered cataloge', function () {
        var service = new products_service_js_1.ProductsService();
        var catalouge = [{ key: 1, category: "Test", value: "Arsenal TV", location: "LONDON" },
            { key: 2, category: "Test2", value: "Chelsea TV", location: "LONDON" },
            { key: 3, category: "Test", value: "Liverpool TV", location: "LIVERPOOL" },
            { key: 4, category: "Test2", value: "Sky News" },
            { key: 5, category: "Test", value: "Sky Sports News" }];
        var expectedProducts = [[Object({ key: 1, category: 'Test', value: 'Arsenal TV', location: 'LONDON' }), Object({ key: 3, category: 'Test', value: 'Liverpool TV', location: 'LIVERPOOL' }), Object({ key: 5, category: 'Test', value: 'Sky Sports News' })],
            [Object({ key: 2, category: 'Test2', value: 'Chelsea TV', location: 'LONDON' }), Object({ key: 4, category: 'Test2', value: 'Sky News' })]];
        //Then   
        testing_1.it('Product service should return an array of array where each array belongs to the same category', function () {
            testing_1.expect(service.getProducts(catalouge)).toEqual(expectedProducts);
        });
    });
});
//# sourceMappingURL=products.service.spec.js.map