'use strict';

describe('Controller: PromptResponseCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.promptResponse'));

  var PromptResponseCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    PromptResponseCtrl = $controller('PromptResponseCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
