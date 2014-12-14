angular.module('homeExpenseApp', [])
    .controller('loginController', function ($scope, accountService) {
        'use strict';

        function clearInputData() {
            $scope.username = '';
            $scope.password = '';
            $scope.repeatPassword = '';
        }

        $scope.showCreateAccount = false;
        $scope.validationError = false;

        clearInputData();

        $scope.goToAccountCreationScreen = function () {
            $scope.showCreateAccount = true;
        };

        $scope.goToSigningScreen = function () {
            $scope.showCreateAccount = false;
        };

        $scope.createAccount = function () {

            var requestData = {
                username: $scope.username,
                password: $scope.password
            };
            accountService.createAccount(requestData).then(function (responseData) {
                if (responseData.response) {
                    $scope.showCreateAccount = false;
                    clearInputData();
                } else {
                    $scope.validationError = true;
                }
            });
        };
    });
