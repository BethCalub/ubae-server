'use strict';

describe('Service: department', function() {
  // load the service's module
  beforeEach(module('ubaeApiApp.department'));

  // instantiate service
  var department;
  beforeEach(inject(function(_department_) {
    department = _department_;
  }));

  it('should do something', function() {
    expect(!!department).to.be.true;
  });
});
