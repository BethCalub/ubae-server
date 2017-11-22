'use strict';

describe('Controller: EntriesCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.entries'));

  var EntriesCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    EntriesCtrl = $controller('EntriesCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
