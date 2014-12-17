angular.module('homeExpenseApp', [])
    .controller('loginController', function ($scope, accountService) {
        'use strict';

        function clearInputData() {
            $scope.defaults = {
                username: '',
                password: '',
                repeatPassword: ''
            }
        }

        $scope.showCreateAccount = false;
        $scope.validationError = false;

        clearInputData();

        $scope.switchLoginScreens = function () {
            $scope.showCreateAccount = !$scope.showCreateAccount;
        };

        $scope.createAccount = function () {

            var requestData = {
                username: $scope.defaults.username,
                password: $scope.defaults.password
            };
            accountService.createAccount(requestData).then(function (responseData) {
                if (responseData.response) {
                    $scope.showCreateAccount = !$scope.showCreateAccount;
                    clearInputData();
                } else {
                    $scope.validationError = true;
                }
            });
        };
    });
