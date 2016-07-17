angular
  .module('app')
  .factory('productFactory', Products);

/** @ngInject */
function Products($http, $resource) {
  this.Menu = $resource('data/menu.json');

  return this;
}
