'use strict';

describe('Controller: PromptCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.prompt'));

  var PromptCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    PromptCtrl = $controller('PromptCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
