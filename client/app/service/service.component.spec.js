'use strict';

describe('Component: ServiceComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.service'));

  var ServiceComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ServiceComponent = $componentController('service', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
