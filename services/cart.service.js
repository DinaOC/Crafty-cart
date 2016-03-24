angular
  .module('craftyCart')
  .service('cartService', function($http) {
    var tiny = 'https://tiny-tiny.herokuapp.com/collections/craftyCart';


function showCart(){
  return $http.get(tiny);
}

return {
  showCart: showCart,

}

function deleteItem(id) {
    return $http.delete(url + '/' + id);
  }
    })
