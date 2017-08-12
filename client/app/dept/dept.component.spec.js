'use strict';

describe('Component: DeptComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.dept'));

  var DeptComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    DeptComponent = $componentController('dept', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
