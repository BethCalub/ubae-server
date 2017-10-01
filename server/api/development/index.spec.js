'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var developmentCtrlStub = {
  index: 'developmentCtrl.index',
  show: 'developmentCtrl.show',
  create: 'developmentCtrl.create',
  upsert: 'developmentCtrl.upsert',
  patch: 'developmentCtrl.patch',
  destroy: 'developmentCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var developmentIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './development.controller': developmentCtrlStub
});

describe('Development API Router:', function() {
  it('should return an express router instance', function() {
    expect(developmentIndex).to.equal(routerStub);
  });

  describe('GET /api/developments', function() {
    it('should route to development.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'developmentCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/developments/:id', function() {
    it('should route to development.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'developmentCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/developments', function() {
    it('should route to development.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'developmentCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/developments/:id', function() {
    it('should route to development.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'developmentCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/developments/:id', function() {
    it('should route to development.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'developmentCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/developments/:id', function() {
    it('should route to development.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'developmentCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
