angular
  .module('app')
  .controller('creditCardController', CreditCardController);

/** @ngInject */
function CreditCardController($scope, $state, setToolbarService) {
  setToolbarService('Manage Credit Cards', false, 'addCreditCard', '');
}
