'use strict';

describe('Directive: statusbar', function() {
  // load the directive's module and view
  beforeEach(module('ubaeApiApp.statusbar'));
  beforeEach(module('components/statusbar/statusbar.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<statusbar></statusbar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the statusbar directive');
  }));
});
