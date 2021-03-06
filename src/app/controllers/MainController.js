angular
  .module('app')
  .controller('mainController', MainController);

/** @ngInject */
function MainController($scope, $state, $rootScope) {
  // default values for toolbar
  $rootScope.$on('setTitleEvent', function (event, data) {
    $scope.toolbar = data;
  });

  $scope.sideBarOpen = false;

  $scope.toggleSideBar = function () {
    $scope.sideBarOpen = true;
  };
  $rootScope.$on('$stateChangeSuccess',
    function () {
      $scope.sideBarOpen = false;
    }
  )
}
