'use strict';

describe('Component: UbaeComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.ubae'));

  var UbaeComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    UbaeComponent = $componentController('ubae', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
