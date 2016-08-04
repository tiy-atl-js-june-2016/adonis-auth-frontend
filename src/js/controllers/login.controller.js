function LoginController ($http, SERVER, $cookies, $state) {

  let vm = this;
  vm.login = login;

  function login (user) {
    $http.post(SERVER.URL + 'login', user).then( res => {
      $cookies.put('access_token', res.data.access_token);
      $state.go('profile');
    });
  }


}

LoginController.$inject = ['$http', 'SERVER', '$cookies', '$state'];
export { LoginController };