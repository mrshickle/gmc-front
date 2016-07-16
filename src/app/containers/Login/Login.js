angular
  .module('app')
  .component('login', {
    templateUrl: 'app/containers/Login/Login.html',
    controller: Login
  });

function Login() {
  this.login = "username";
}
