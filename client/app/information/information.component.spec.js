'use strict';

describe('Component: InformationComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.information'));

  var InformationComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    InformationComponent = $componentController('information', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
