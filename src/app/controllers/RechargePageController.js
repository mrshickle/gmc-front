angular
  .module('app')
  .controller('rechargeController', RechargeController);

/** @ngInject */
function RechargeController($scope, $state, setToolbarService)
{
  setToolbarService('', false, false, '');
}
