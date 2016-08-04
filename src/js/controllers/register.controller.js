function RegisterController ($http, SERVER, $state) {

  let vm = this;
  vm.register = register;

  function register (user) {
    $http.post(SERVER.URL + 'register', user).then( res => {
      $state.go('login');
    });
  }

}

RegisterController.$inject = ['$http', 'SERVER', '$state'];
export { RegisterController };