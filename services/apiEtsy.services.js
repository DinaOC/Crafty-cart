
angular
.module('craftyCart')
.service('apiEtsy', function($http){
  var key = '1l3ic1crth8b5kcommiamq3n';
      var cors = 'https://free-cors-server.herokuapp.com/any-request/';
      var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + '&includes=MainImage');
      var tiny = 'https://tiny-tiny.herokuapp.com/collections/craftyCart';
function getActiveListings() {
  return $http.get(cors + url);
}
//listings on the page
// return{
//   getActiveListings: getActiveListings,
// }

function showProduct(id){
  return $http.get(cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '?api_key=' + key + '&includes=MainImage'));
}

function addItemToCart(listing){
  return $http.post(tiny, listing)
}

function deleteItem(id) {
      return $http.delete(url + '/' + id);
    }
    
return {
  getActiveListings: getActiveListings,
  showProduct: showProduct,
  addItemToCart: addItemToCart,
  deleteItem: deleteItem
}




});
