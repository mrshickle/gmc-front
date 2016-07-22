angular
  .module('app')
  .controller('creditCardController', CreditCardController);

/** @ngInject */
function CreditCardController($scope, $state, setToolbarService) {
  setToolbarService('', false, false, '');
}
