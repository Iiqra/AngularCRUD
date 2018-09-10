
(function () {
    'use strict';

    function productService($http, $httpParamSerializer) {

        var vm = this;
       // vm.APIUrl = productApiPath.Path;
        vm.APIUrl = "http://localhost:60900/api/product/";
        //vm.DeleteProduct = function (productId, onSuccess) {
        //    debugger;
        //    $http.delete(vm.APIUrl + 'DeleteProduct?productId=' + productId).then(function success(result) {
        //        onSuccess(result.data);
        //    }, function error() {
        //        onSuccess();
        //    });
        //    // delete will return int
        //};
        vm.DeleteProduct = function (productId, onSuccess) {
            debugger;
            $http.delete(vm.APIUrl + 'DeleteProduct?productId=' + productId).then(function success(result) {
                onSuccess(result.data);
            }, function error() {
                onSuccess();
            });
            // delete will return int
        };

        vm.GetProduct = function (productId,onSuccess) { // onsuccess is call back function, - way to return from function, either use return or call back
            debugger;
            $http.get(vm.APIUrl + 'GetProduct?productId=' + productId).then(function success(result) {
                onSuccess(result.data);
            }, function error() {
                onSuccess();
            });
        };

        vm.GetProductsList = function (onSuccess) {
            debugger;
            $http.get(vm.APIUrl + 'GetProductList').then(function success(result) {
                onSuccess(result.data);
            }, function error() {
                onSuccess();
            });
        };
        vm.SaveProduct = function (product, onSuccess) {

            debugger;           

            $http.post(vm.APIUrl + 'SaveProduct', $httpParamSerializer(product), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function success(result) {
                onSuccess(result.data);
            }, function error() {
                onSuccess();
            });
        };      
        vm.UpdateProduct = function (product, onSuccess) {

            debugger;

            $http.put(vm.APIUrl + 'UpdateProduct', $httpParamSerializer(product), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function success(result) {
                onSuccess(result.data);
            }, function error() {
                onSuccess();
            });
        };
        //vm.UpdateProduct = function (product, onSuccess) {

        //    debugger;

        //    $http.put(vm.APIUrl + 'UpdateProduct', $httpParamSerializer(product), {
        //        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        //    }).then(function success(result) {
        //        onSuccess(result.data);
        //    }, function error() {
        //        onSuccess();
        //    });
        //};



    }
    angular
        .module('productapp')
        .service('productService', ['$http', '$httpParamSerializer', productService]);
})();