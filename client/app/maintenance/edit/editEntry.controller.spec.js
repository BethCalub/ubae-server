'use strict';

describe('Controller: EditEntryCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.editEntry'));

  var EditEntryCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    EditEntryCtrl = $controller('EditEntryCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
