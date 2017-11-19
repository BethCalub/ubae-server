'use strict';

describe('Controller: CreateResponseCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.createResponse'));

  var CreateResponseCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    CreateResponseCtrl = $controller('CreateResponseCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
