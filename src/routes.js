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
    .state('Main', {
      url: '/main',
      templateUrl: 'app/views/main-page.html',
      controller: MainPageController
    })
    .state('Category', {
      url: '/category/:active',
      templateUrl: 'app/views/category-page.html',
      controller: CategoryPageController
    })
    .state('Product', {
      url: '/product/:productSlug',
      templateUrl: 'app/views/product-page.html',
      controller: ProductPageController
    })
    .state('Cart', {
      url: '/cart',
      templateUrl: 'app/views/cart-page.html',
      controller: CartPageController
    })
    .state('Wallet', {
      url: '/wallet',
      templateUrl: 'app/views/wallet-page.html',
      controller: WalletPageController
    })
    .state('CreditCards', {
      url: '/credit-cards',
      templateUrl: 'app/views/credit-card-page.html',
      controller: CreditCardController
    })
    .state('Recharge', {
      url: '/recharge',
      templateUrl: 'app/views/recharge-page.html',
      controller: RechargePageController
    })
    .state('AddCreditCard', {
      url: '/addCreditCard',
      templateUrl: 'app/views/add-credit-card-page.html',
      controller: AddCreditCardPageController
    });
}
