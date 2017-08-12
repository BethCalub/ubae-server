'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var responseCtrlStub = {
  index: 'responseCtrl.index',
  show: 'responseCtrl.show',
  create: 'responseCtrl.create',
  upsert: 'responseCtrl.upsert',
  patch: 'responseCtrl.patch',
  destroy: 'responseCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var responseIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './response.controller': responseCtrlStub
});

describe('Response API Router:', function() {
  it('should return an express router instance', function() {
    expect(responseIndex).to.equal(routerStub);
  });

  describe('GET /api/responses', function() {
    it('should route to response.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'responseCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/responses/:id', function() {
    it('should route to response.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'responseCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/responses', function() {
    it('should route to response.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'responseCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/responses/:id', function() {
    it('should route to response.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'responseCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/responses/:id', function() {
    it('should route to response.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'responseCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/responses/:id', function() {
    it('should route to response.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'responseCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
