//Google Analytics
(function (i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function () {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-52206427-8', 'none');
//

//Fix for clients with adblock or ublock services
var dependencies = ["ui.router", "angulartics", "angulartics.google.analytics"];
try {
	angular.module("angulartics.google.analytics");
} catch (err) {
	dependencies = ["ui.router"];
}

//Angular App
angular.module('gdube', dependencies)

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