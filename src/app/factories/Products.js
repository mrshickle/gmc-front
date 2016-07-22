angular
  .module('app')
  .factory('productFactory', Products);

/** @ngInject */
function Products($http, $resource) {
  this.menu = $resource('data/menu.json');
  this.getCategories = $http.get('data/category.json');
  this.category = $resource('data/category.json');

  return this;
}
