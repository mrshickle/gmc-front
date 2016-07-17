angular
  .module('app')
  .component('categories', {
    templateUrl: 'app/containers/Categories/Categories.html',
    controller: Categories
  });

/** @ngInject */
function Categories(productFactory, $scope) {
  this.categories = productFactory.Menu.get(function (data) {
    $scope.categories = data.categories;
  });
}
