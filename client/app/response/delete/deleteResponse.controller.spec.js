'use strict';

describe('Controller: DeleteResponseCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.deleteResponse'));

  var DeleteResponseCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    DeleteResponseCtrl = $controller('DeleteResponseCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
