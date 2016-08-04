import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import {config} from './config';

import {LoginController} from './controllers/login.controller';
import {RegisterController} from './controllers/register.controller';
import {ProfileController} from './controllers/profile.controller';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(config)
  .constant('SERVER', {
    URL: 'https://adonis-auth.herokuapp.com/'
  })
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .controller('ProfileController', ProfileController);