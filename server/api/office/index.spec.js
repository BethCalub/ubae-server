'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var officeCtrlStub = {
  index: 'officeCtrl.index',
  show: 'officeCtrl.show',
  create: 'officeCtrl.create',
  upsert: 'officeCtrl.upsert',
  patch: 'officeCtrl.patch',
  destroy: 'officeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var officeIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './office.controller': officeCtrlStub
});

describe('Office API Router:', function() {
  it('should return an express router instance', function() {
    expect(officeIndex).to.equal(routerStub);
  });

  describe('GET /api/offices', function() {
    it('should route to office.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'officeCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/offices/:id', function() {
    it('should route to office.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'officeCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/offices', function() {
    it('should route to office.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'officeCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/offices/:id', function() {
    it('should route to office.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'officeCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/offices/:id', function() {
    it('should route to office.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'officeCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/offices/:id', function() {
    it('should route to office.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'officeCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
