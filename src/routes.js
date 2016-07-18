angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('Welcome', {
      url: '/',
      templateUrl: 'app/views/home-page.html',
      controller: HomePageController
    })
    .state('Login', {
      url: '/login',
      templateUrl: 'app/views/login-page.html',
      controller: LoginPageController
    })
    .state('categories', {
      url: '/shop',
      template: '<categories></categories>'
    });
}
