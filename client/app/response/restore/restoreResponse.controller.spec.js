'use strict';

describe('Controller: RestoreResponseCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.restoreResponse'));

  var RestoreResponseCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    RestoreResponseCtrl = $controller('RestoreResponseCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
