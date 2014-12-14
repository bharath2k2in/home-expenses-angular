angular.module('homeExpenseApp')
    .factory('accountService', function ($http, $q, homeConstants) {

        var deferred = $q.defer();
        var createAccountUrl = homeConstants.createAccountUrl;

        return {
            createAccount: function (requestData) {
                console.log(homeConstants);
                $http.post(createAccountUrl, requestData).success(function (responseData) {
                    deferred.resolve(responseData);
                }).error(function (msg) {
                    deferred.reject(msg);
                });
                return deferred.promise;
            }
        }
    });
