// Load the custom app ES6 modules

import DataService from 'src/users/services/DataService';
import Home from 'src/users/components/home/Home';

// Define the AngularJS 'users' module

export default angular
  .module("users", ['ngMaterial'])

.component(Home.name, Home.config)

.service("DataService", DataService);