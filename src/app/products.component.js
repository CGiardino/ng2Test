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
var ProductsComponent = (function () {
    function ProductsComponent() {
        this.changeProduct = new core_1.EventEmitter();
        this.selectedProducts = [];
    }
    ProductsComponent.prototype.onChange = function ($event, product) {
        var index = this.selectedProducts.indexOf(product);
        if ($event.target.checked) {
            //add to selected products
            if (index == -1) {
                this.selectedProducts.push(product);
            }
        }
        else {
            //remove from selected products
            if (index > -1) {
                this.selectedProducts.splice(index, 1);
            }
        }
        this.changeProduct.emit({ selected: this.selectedProducts, category: this.category });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProductsComponent.prototype, "customerId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProductsComponent.prototype, "products", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProductsComponent.prototype, "category", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProductsComponent.prototype, "changeProduct", void 0);
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products',
            template: "\n        <h2>{{ category }}</h2>\n        <h3>{{ customerId }}</h3>\n        <li *ngFor=\"let product of products\">\n            <input type=\"checkbox\"\n                id=\"productsId{{product.key}}\"  \n                (change)=\"onChange($event, product)\"\n                [(ngModel)]=\"product['checked']\"\n                /> {{ product.value }}\n        </li>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map