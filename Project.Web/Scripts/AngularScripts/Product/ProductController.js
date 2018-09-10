(function () {
    'use strict';
    function productController(productService) {
        var vm = this;
        vm.IsUpdate = false; // you want to save and modify from one button, we will enable it on edit click
        vm.GetProductsList = function () {
            productService.GetProductsList(function (response) {
                debugger;
                if (!!response) {
                    vm.productList = response;
                }
            });
        };

        vm.Init = function () { // by default at least it should show list of prods
            vm.GetProductsList();
        };

        vm.SaveProduct = function () {
            debugger;
            if (vm.IsUpdate) {
                productService.UpdateProduct(vm.Product,
                        function (response) {
                            if (!!response) {
                                vm.IsUpdate = false;
                               
                                alert('Product updated.');
                              
                            }
                        });

                
            }
            else {
                productService.SaveProduct(vm.Product,
             function (response) {
                 if (!!response && response == true) {
                     alert('Product Saved.');
                     vm.GetProductsList();
                 }
             });
            }
           
            ///
        };

        vm.GetProduct = function (productId) { //will be called at edit clicked
            productService.GetProduct(productId, function (response) {
                if (!!response) {
                    vm.Product = response;
                    vm.IsUpdate = true;
                }
            });
        };

        vm.DeleteProduct = function (productId) {
            debugger;
            productService.DeleteProduct(productId, function (response) {
                if (!!response) {
                    //vm..Id = productId;
                    vm.IsDeleted = response.data;
                }
            });
        };

        //vm.UpdateProduct = function () {
        //    productService.UpdateProduct(vm.Product,
        //  function (response) {
        //      if (!!response) {

        //      }
        //  });
        //};

        vm.Init();
    }

    angular
       .module('productapp')
       .controller('productController', ['productService', productController]);
})();

