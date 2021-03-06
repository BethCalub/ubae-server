'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('main', {
    url: '/',
    template: '<main></main>',
    authenticate: true
  })
  .state('alt', {
    url: '/alt',
    template: require('./alt.html')
  })
  .state('about', {
    url: '/about',
    template: require('./about/about.html')
  });
}
