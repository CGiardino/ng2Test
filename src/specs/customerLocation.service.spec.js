"use strict";
/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
var testing_1 = require('angular2/testing');
var customerLocation_service_js_1 = require("../app/customerLocation.service.js");
testing_1.describe('MyList Tests', function () {
    var service = new customerLocation_service_js_1.LocationService();
    testing_1.it('Should get 5 dogs', function () {
        testing_1.expect(service.getLocation(1)).toBe("LONDON");
    });
});
//# sourceMappingURL=customerLocation.service.spec.js.map