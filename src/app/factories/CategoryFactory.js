angular
  .module('app')
  .factory('categoryFactory', categoryFactory);

/** @ngInject */
function categoryFactory($http, $resource) {
  this.Menu = $resource('data/categories.json');
  return this;
}
