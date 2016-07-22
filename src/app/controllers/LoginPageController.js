angular
  .module('app')
  .controller('loginPageController', LoginPageController);

/** @ngInject */
function LoginPageController($scope, $state, setToolbarService) {
  setToolbarService('', false, false, 'tool-login');

  $scope.login = function () {
    $state.go('Main');
  };
}
