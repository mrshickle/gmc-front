angular
  .module('app')
  .controller('productPageController', ProductPageController);

/** @ngInject */
function ProductPageController($scope, $state, setToolbarService, $stateParams, productFactory, $q) {
  console.log($stateParams.productSlug);
  $scope.productSlug = $stateParams.productSlug;

  var promises = {
    categories: productFactory.getCategories
  };

  $q.all(promises).then(function (promiseData) {
    var categories = promiseData.categories.data.categories;
    angular.forEach(categories, function (category) {
      if (category.subcategories) {
        angular.forEach(category.subcategories, function (subcategory) {
          angular.forEach(subcategory.items, function (item) {
            if (item.slug === $scope.productSlug) {
              $scope.currentProduct = item;
              setToolbarService($scope.currentProduct.category_name, true, false, '');
            }
          });
        });
      } else if (category.items) {
        angular.forEach(category.items, function (item) {
          if (item.slug === $scope.productSlug) {
            $scope.currentProduct = item;
            setToolbarService($scope.currentProduct.category_name, true, false, '');
          }
        });
      }
    });
  });

  $scope.addToCard = function() {
    $state.go('Cart', {'product' : $scope.currentProduct});
  }
}
