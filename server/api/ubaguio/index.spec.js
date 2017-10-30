'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var ubaguioCtrlStub = {
  index: 'ubaguioCtrl.index',
  show: 'ubaguioCtrl.show',
  create: 'ubaguioCtrl.create',
  upsert: 'ubaguioCtrl.upsert',
  patch: 'ubaguioCtrl.patch',
  destroy: 'ubaguioCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var ubaguioIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './ubaguio.controller': ubaguioCtrlStub
});

describe('Ubaguio API Router:', function() {
  it('should return an express router instance', function() {
    expect(ubaguioIndex).to.equal(routerStub);
  });

  describe('GET /api/ubaguio', function() {
    it('should route to ubaguio.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'ubaguioCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/ubaguio/:id', function() {
    it('should route to ubaguio.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'ubaguioCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/ubaguio', function() {
    it('should route to ubaguio.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'ubaguioCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/ubaguio/:id', function() {
    it('should route to ubaguio.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'ubaguioCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/ubaguio/:id', function() {
    it('should route to ubaguio.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'ubaguioCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/ubaguio/:id', function() {
    it('should route to ubaguio.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'ubaguioCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
