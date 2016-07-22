angular
  .module('app')
  .controller('mainPageController', MainPageController);

/** @ngInject */
function MainPageController($scope, $state, setToolbarService, productFactory) {
  setToolbarService('GMC', true, true, '');
  this.categories = productFactory.category.get(function (data) {
    $scope.categories = data.categories;
  });
}
