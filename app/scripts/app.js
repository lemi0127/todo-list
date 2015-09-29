var ToDo = angular.module('ToDo', [
    'ui.router',
    'ngStorage'
])

ToDo.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/Home');
    
  $stateProvider
  
  .state('Home', {
    url: '/Home',  
    templateUrl: 'views/Home.html',
    controller: 'TodoHomeCotrl'  
  })
  .state('List2', {
    url: '/List2',  
   templateUrl: 'views/List2.html',
   controller : 'Todo2Ctrl'
  })
  .state('List3', {
    url: '/List3',  
   templateUrl: 'views/List3.html',
   controller : 'Todo3Ctrl'
  });

});