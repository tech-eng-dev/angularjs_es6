import HomeController from './HomeController'

export default {
  name: 'home',
  config: {
    bindings: { selected: '<' },
    templateUrl: 'src/users/components/home/Home.html',
    controller: ['DataService', HomeController]
  }
};