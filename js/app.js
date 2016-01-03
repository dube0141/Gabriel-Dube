angular.module('gdube', ["ui.router"])

.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html'
		})

	.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html'
	})

	.state('contact', {
		url: '/contact',
		templateUrl: 'templates/contact.html'
	});

	$urlRouterProvider.otherwise('/home');
})

.controller("NavController", function ($scope, $location) {
	$scope.getClass = function (path) {
		if ($location.path().substr(0, path.length) === path) {
			return 'active';
		} else {
			return '';
		}
	}
});