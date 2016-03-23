
angular
  .module('craftyCart')
  .controller('HomeController', function($scope, apiEtsy,$routeParams) {
    apiEtsy.getActiveListings()
    .then(function(data){
      console.log(data);
      $scope.listings = data.data.results;
    })

    if($routeParams.id) {
      apiEtsy.showProduct($routeParams.id)
        .then(function(product){
          console.log("INFO", product);
          $scope.product = product.data.results[0];
        });
    }

//listing on the page
      })
