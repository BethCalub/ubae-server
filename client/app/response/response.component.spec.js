'use strict';

describe('Component: ResponseComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.response'));

  var ResponseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ResponseComponent = $componentController('response', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
