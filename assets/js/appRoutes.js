// public/js/appRoutes.js
angular.module('appRoutes', []).config(function($routeProvider, $locationProvider) {
    $routeProvider
        // home page
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'mainController',
            controllerAs: 'main'
        })

        .when('/projects', {
            templateUrl: '/views/projects.html',
            controller: 'ProjectsController',
            controllerAs: 'projects'
        })

        .when('/links', {
            templateUrl: '/views/links.html',
            controller: 'LinksController',
            controllerAs: 'links'

        })

        .when('/contacts', {
            templateUrl: '/views/contacts.html',
            controller: 'ContactController',
            controllerAs: 'contact'
        })

        .when('/about', {
            templateUrl: '/views/about.html',
            controller: 'AboutController',
            controllerAs: 'about'
        })




    // $locationProvider.html5Mode(true);

});