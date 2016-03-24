angular
  .module('craftyCart',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      //added items on the page
      .when('/itempage/:id',{
        templateUrl: "templates/one.html",
        controller: "HomeController"
      })
      // added single item on the page
      .when('/cartpage/',{
        templateUrl: "templates/cart.html",
        controller: "CartController"
      })
      //adding cart page
      .when('/404',{
            template: '<h1> Great, you messed up!</h1>',
            controller: 'HomeController'
          })
      .otherwise ({
         redirectTo: '/404'
      });
})




// api key 1l3ic1crth8b5kcommiamq3n
