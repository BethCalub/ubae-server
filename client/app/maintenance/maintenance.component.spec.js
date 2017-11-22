'use strict';

describe('Component: MaintenanceComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.maintenance'));

  var MaintenanceComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MaintenanceComponent = $componentController('maintenance', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
