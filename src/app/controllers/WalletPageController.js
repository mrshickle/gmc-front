angular
  .module('app')
  .controller('walletPageController', WalletPageController);

/** @ngInject */
function WalletPageController($scope, $state, setToolbarService) {
  setToolbarService('', false, false, '');
}
