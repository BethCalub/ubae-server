'use strict';

describe('Directive: sidenav', function() {
  // load the directive's module and view
  beforeEach(module('ubaeApiApp.sidenav'));
  beforeEach(module('app/sidenav/sidenav.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<sidenav></sidenav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the sidenav directive');
  }));
});
