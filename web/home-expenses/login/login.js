angular.module('homeExpenseApp', [])
    .controller('loginController', function ($scope, accountService) {
        'use strict';

        function clearInputData() {
            $scope.user = {
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
                username: $scope.user.username,
                password: $scope.user.password
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
