'use strict';

describe('Component: CreateNewComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.createNew'));

  var CreateNewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CreateNewComponent = $componentController('createNew', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
