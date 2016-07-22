angular
  .module('app')
  .controller('rechargePageController', RechargePageController);

/** @ngInject */
function RechargePageController($scope, $state, setToolbarService) {
  setToolbarService('Recharge Your Ballance', false, '', '');
  $scope.rechargeOptions = [
    {
      value: 50,
      text: '$50 for $50'
    },
    {
      value: 100,
      text: '$100 for $100'
    },
    {
      value: 200,
      text: '$200 for $200'
    },
    {
      value: 500,
      text: '$500 for $500'
    },
  ];

  $scope.creditCardOptions = [
    '**** **** **** 1342',
    '**** **** **** 4352'
  ];

  $scope.rechargeAmount = '50';
  $scope.creditCard = '**** **** **** 1342';
}
