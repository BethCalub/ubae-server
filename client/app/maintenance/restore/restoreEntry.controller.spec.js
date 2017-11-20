'use strict';

describe('Controller: RestoreEntryCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.restoreEntry'));

  var RestoreEntryCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    RestoreEntryCtrl = $controller('RestoreEntryCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
