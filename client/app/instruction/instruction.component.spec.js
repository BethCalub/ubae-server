'use strict';

describe('Component: InstructionComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.instruction'));

  var InstructionComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    InstructionComponent = $componentController('instruction', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
