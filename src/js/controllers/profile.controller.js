function ProfileController ($http, SERVER, $cookies) {

  let vm = this;

  init();

  function init () {
    let token = $cookies.get('access_token');
    let config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };

    $http.get(SERVER.URL + 'profile', config).then( res => {
      vm.user = res.data;
    });
  }

}

ProfileController.$inject = ['$http', 'SERVER', '$cookies'];
export { ProfileController };