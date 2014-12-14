homeExpenseAppDev = angular.module('homeExpenseAppDev', ['homeExpenseApp', 'ngMockE2E']);
homeExpenseAppDev.run(function($httpBackend) {

    // returns the current list of phones
    //$httpBackend.whenGET('/phones').respond(phones);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/homeexpense/createaccount').respond(200, {response : true});
    $httpBackend.whenGET(/^\/templates\//).passThrough();
    //...
});