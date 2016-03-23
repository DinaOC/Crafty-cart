
angular
.module('craftyCart')
.service('apiEtsy', function($http){
  var key = '1l3ic1crth8b5kcommiamq3n';
      var cors = 'https://free-cors-server.herokuapp.com/any-request/';
      var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + '&includes=MainImage');
function getActiveListings() {
  return $http.get(cors + url);
}
// return{
//   getActiveListings: getActiveListings,
// }

function showProduct(id){
  return $http.get(cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '?api_key=' + key + '&includes=MainImage'));
}
return {
  getActiveListings: getActiveListings,
  showProduct: showProduct
}

//listings on the page
});
