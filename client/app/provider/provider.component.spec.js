'use strict';

describe('Component: ProviderComponent', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.provider'));

  var ProviderComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ProviderComponent = $componentController('provider', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
