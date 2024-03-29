angular
  .module('myAngularApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
  ])
  .config(['$routeProvider' , function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
 .directive('ngSparkline', ['', function(){
   // Runs during compile
   return {
     // name: '',
     // priority: 1,
     // terminal: true,
     // scope: {}, // {} = isolate, true = child, false/undefined = no change
     // controller: function($scope, $element, $attrs, $transclude) {},
     // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
     // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
     // template: '',
     // templateUrl: '',
     // replace: true,
     // transclude: true,
     // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
     link: function($scope, iElm, iAttrs, controller) {
       
     }
   };
 }]);
  
  