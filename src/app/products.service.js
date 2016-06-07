"use strict";
var ProductsService = (function () {
    function ProductsService() {
    }
    //return products mapped by category
    ProductsService.prototype.getProducts = function (catalogue) {
        var products = [];
        catalogue.forEach(function (product) {
            if (product.hasOwnProperty('category')) {
                var category = product['category'];
                if (products[category] == null) {
                    products[category] = [];
                }
                products[category].push(product);
            }
        });
        var toReturn = [];
        for (var category in products) {
            if (products.hasOwnProperty(category)) {
                toReturn.push(products[category]);
            }
        }
        return toReturn;
    };
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map