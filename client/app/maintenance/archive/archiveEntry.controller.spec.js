'use strict';

describe('Controller: ArchiveEntryCtrl', function() {
  // load the controller's module
  beforeEach(module('ubaeApiApp.archiveEntry'));

  var ArchiveEntryCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    ArchiveEntryCtrl = $controller('ArchiveEntryCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
