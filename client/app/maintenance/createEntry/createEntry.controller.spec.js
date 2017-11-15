'use strict';

describe('Controller: CreateEntryCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.createEntry'));

  var CreateEntryCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    CreateEntryCtrl = $controller('CreateEntryCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
