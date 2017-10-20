'use strict';

describe('Component: DevelopmentComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.development'));

  var DevelopmentComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    DevelopmentComponent = $componentController('development', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
