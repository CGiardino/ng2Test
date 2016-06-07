"use strict";
var LocationService = (function () {
    function LocationService() {
        //stub of customers list
        this.customers = [{ key: 1, location: "LONDON" },
            { key: 2, location: "LONDON" },
            { key: 3, location: "LIVERPOOL" }];
    }
    LocationService.prototype.getLocation = function (customerId) {
        for (var index = 0; index < this.customers.length; index++) {
            var customer = this.customers[index];
            if (customer.hasOwnProperty('key')) {
                var id = customer['key'];
                if (id === customerId) {
                    return customer['location'];
                }
            }
        }
        //if customer is not retrieved
        throw new UserError("There was a problem retrieving the customer information");
    };
    return LocationService;
}());
exports.LocationService = LocationService;
var UserError = (function () {
    function UserError(message) {
        this.name = 'UserError';
        this.message = message;
    }
    return UserError;
}());
exports.UserError = UserError;
//# sourceMappingURL=customerLocation.service.js.map