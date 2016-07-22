angular
  .module('app')
  .controller('categoryPageController', CategoryPageController);

/** @ngInject */
function CategoryPageController($scope, $state, setToolbarService, $stateParams, productFactory, $q) {
  $scope.active = $stateParams.active;

  setToolbarService($scope.active, false, false, 'with-tab');

  var promises = {
    categories: productFactory.getCategories
  };

  $scope.products = {};

  $q.all(promises).then(function (promiseData) {
    angular.forEach(promiseData.categories.data.categories, function (categoryValue) {
      if (categoryValue.title === $scope.active) {
        if (categoryValue.subcategories) {
          angular.forEach(categoryValue.subcategories, function (subcategory) {
            $scope.products[subcategory.title] = subcategory.items;
          });
        } else if (categoryValue.items) {
          $scope.products[categoryValue.title] = categoryValue.items;
        }
      }
    });
  });
}
