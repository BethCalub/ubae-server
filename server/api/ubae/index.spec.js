'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var ubaeCtrlStub = {
  index: 'ubaeCtrl.index',
  show: 'ubaeCtrl.show',
  create: 'ubaeCtrl.create',
  upsert: 'ubaeCtrl.upsert',
  patch: 'ubaeCtrl.patch',
  destroy: 'ubaeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var ubaeIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './ubae.controller': ubaeCtrlStub
});

describe('Ubae API Router:', function() {
  it('should return an express router instance', function() {
    expect(ubaeIndex).to.equal(routerStub);
  });

  describe('GET /api/ubae', function() {
    it('should route to ubae.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'ubaeCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/ubae/:id', function() {
    it('should route to ubae.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'ubaeCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/ubae', function() {
    it('should route to ubae.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'ubaeCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/ubae/:id', function() {
    it('should route to ubae.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'ubaeCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/ubae/:id', function() {
    it('should route to ubae.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'ubaeCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/ubae/:id', function() {
    it('should route to ubae.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'ubaeCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
