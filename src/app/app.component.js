"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var products_component_1 = require('./products.component');
var basket_component_1 = require('./basket.component');
var products_service_1 = require('./products.service');
var customerLocation_service_1 = require('./customerLocation.service');
var catalogue_service_1 = require('./catalogue.service');
var checkout_component_1 = require('./checkout.component');
var cookie_service_1 = require('./cookie.service');
var AppComponent = (function () {
    //populate products by customerid and location
    function AppComponent(cookieService, productsService, locationService, catalogueService) {
        this.isSelection = true; //to dinamically display the checkout
        this.mapSelectedProducts = []; //map of selected products
        this.errorMsg = ""; //error if user is not found
        this.confirmationMsg = ""; //confirmation after checkout
        this.customerId = parseInt(cookieService.getCookie('customerId'));
        if (isNaN(this.customerId)) {
            this.customerId = 1;
        }
        try {
            var catalogue = void 0, location_1;
            location_1 = locationService.getLocation(this.customerId);
            catalogue = catalogueService.getCatalogue(location_1);
            this.categories = productsService.getProducts(catalogue); //getting lists of products by category to dinamically populate the table
        }
        catch (error) {
            if (error.name === 'UserError') {
                this.errorMsg = error.message;
            }
        }
    }
    //change the status of selected products for each component of the table
    AppComponent.prototype.onSelectionProductsChange = function ($event) {
        this.mapSelectedProducts[$event.category] = $event.selected;
        //flatten the map in array for ngfor (not ideal)
        this.selectedProducts = [];
        for (var key in this.mapSelectedProducts) {
            if (this.mapSelectedProducts.hasOwnProperty(key)) {
                this.selectedProducts = this.selectedProducts.concat(this.mapSelectedProducts[key]);
            }
        }
    };
    //change the layout of template if ready for checkout confirmation
    AppComponent.prototype.onCheckout = function ($event) {
        this.isSelection = $event.confirmed;
    };
    //change the layout of template when checkout is successful
    AppComponent.prototype.onConfirmation = function ($event) {
        if ($event.confirmed) {
            this.confirmationMsg = "Thank you for your purchase";
        }
        else {
            this.isSelection = true;
            this.confirmationMsg = "";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div [hidden]=\"!isSelection\"> \n            <h1>Product selection</h1>\n            <table>\n                <tr class=\".row\">\n                    <span *ngFor=\"let products of categories\">\n                        <td class=\".col-md-1\" ><products  [category]=\"products[0].category\" [products]=\"products\" (changeProduct)=\"onSelectionProductsChange($event)\"></products></td>\n                    </span>\n                    <td id='basket' class=\".col-md-4\"><basket [selectedProducts]=\"selectedProducts\" (checkoutProducts)=\"onCheckout($event)\"></basket></td>\n                </tr>    \n            </table>\n            <h3 id='errorMsg' *ngIf=\"errorMsg!=''\">{{errorMsg}}</h3>\n        </div>\n        <div *ngIf=\"confirmationMsg==''&& !isSelection\">\n            <checkout [customerId]=\"customerId\" [selectedProducts]=\"selectedProducts\" (confirmation)=\"onConfirmation($event)\"></checkout>\n        </div>\n        <h3 id='confirmationMsg' *ngIf=\"confirmationMsg!=''\">{{ confirmationMsg }}</h3>\n    ",
            directives: [products_component_1.ProductsComponent, basket_component_1.BasketComponent, checkout_component_1.CheckoutComponent],
            providers: [cookie_service_1.CookieService, products_service_1.ProductsService, customerLocation_service_1.LocationService, catalogue_service_1.CatalogueService]
        }), 
        __metadata('design:paramtypes', [cookie_service_1.CookieService, products_service_1.ProductsService, customerLocation_service_1.LocationService, catalogue_service_1.CatalogueService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map