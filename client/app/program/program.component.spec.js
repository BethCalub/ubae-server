'use strict';

describe('Component: ProgramComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.program'));

  var ProgramComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ProgramComponent = $componentController('program', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
