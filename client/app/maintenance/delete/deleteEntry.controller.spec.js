'use strict';

describe('Controller: DeleteEntryCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.deleteEntry'));

  var DeleteEntryCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    DeleteEntryCtrl = $controller('DeleteEntryCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
