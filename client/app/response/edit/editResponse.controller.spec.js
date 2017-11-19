'use strict';

describe('Controller: EditResponseCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.editResponse'));

  var EditResponseCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    EditResponseCtrl = $controller('EditResponseCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
