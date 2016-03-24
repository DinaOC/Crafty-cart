
angular
  .module('craftyCart')
  .controller('HomeController', function($scope, apiEtsy,$routeParams) {
    apiEtsy.getActiveListings()
    .then(function(data){
      console.log(data);
      $scope.listings = data.data.results;
    })
    //listing on the page

    if($routeParams.id) {
      apiEtsy.showProduct($routeParams.id)
        .then(function(product){
          console.log("Show products!", product);
          $scope.product = product.data.results[0];
        });
        // single item page
    }

      $scope.addItemToCart = function(listing){
        apiEtsy.addItemToCart(listing)
        .then(function(data){
          console.log(data);
        })
         // adding items to the cart
      }
      })
