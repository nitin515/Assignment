var myApp = angular.module("myApp", ['ngRoute']);

myApp.controller("myController", function($scope, $location){
	$scope.showForm = function() {
		$location.url('/form');
	}
	$scope.showResource = function() {
		$location.url('/resource');
	}
	$scope.showMain = function() {
		$location.url('/main');
	}
});

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/form', {
		'templateUrl': 'templates/formContent.html'
	}).
	when('/resource', {
		'templateUrl': 'templates/resources.html'
	}).
	otherwise({
		'templateUrl': 'templates/main.html'
	});
}]);