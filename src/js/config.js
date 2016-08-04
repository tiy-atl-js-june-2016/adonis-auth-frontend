function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'templates/login.tpl.html'
    })
    .state('register', {
      url: '/register',
      controller: 'RegisterController as vm',
      templateUrl: 'templates/register.tpl.html'
    })
    .state('profile', {
      url: '/profile', 
      controller: 'ProfileController as vm',
      templateUrl: 'templates/profile.tpl.html'
    });

    $urlRouterProvider.otherwise('/login')

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };