
angular
  .module('craftyCart')
  .controller('CartController', function($scope, cartService ,$routeParams) {


  cartService.showCart()
    .then(function(data){
      $scope.listings = data.data;
    })
    $scope.deleteItem = function(obj){
        console.log("DELETED", obj);
         var deleted = $scope.listings.findIndex(function(el){
           return el._id === obj._id
         });

         $scope.listings.splice(deleted,1);
         CartService.deleteItem(obj._id)
       }

});
