"use strict";
var CatalogueService = (function () {
    function CatalogueService() {
        //stub of product list
        this.catalogue = [{ key: 1, category: "Sports", value: "Arsenal TV", location: "LONDON" },
            { key: 2, category: "Sports", value: "Chelsea TV", location: "LONDON" },
            { key: 3, category: "Sports", value: "Liverpool TV", location: "LIVERPOOL" },
            { key: 4, category: "News", value: "Sky News" },
            { key: 5, category: "News", value: "Sky Sports News" }];
    }
    //return all the products based on locationId
    CatalogueService.prototype.getCatalogue = function (locationId) {
        var result = [];
        this.catalogue.forEach(function (product) {
            if (product.hasOwnProperty('location')) {
                var location = product['location'];
                if (location === locationId) {
                    result.push(product);
                }
            }
            else {
                result.push(product);
            }
        });
        return result;
    };
    return CatalogueService;
}());
exports.CatalogueService = CatalogueService;
//# sourceMappingURL=catalogue.service.js.map