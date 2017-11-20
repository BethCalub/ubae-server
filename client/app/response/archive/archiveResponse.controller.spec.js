'use strict';

describe('Controller: ArchiveResponseCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.archiveResponse'));

  var ArchiveResponseCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    ArchiveResponseCtrl = $controller('ArchiveResponseCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
