'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var deptCtrlStub = {
  index: 'deptCtrl.index',
  show: 'deptCtrl.show',
  create: 'deptCtrl.create',
  upsert: 'deptCtrl.upsert',
  patch: 'deptCtrl.patch',
  destroy: 'deptCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var deptIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './dept.controller': deptCtrlStub
});

describe('Dept API Router:', function() {
  it('should return an express router instance', function() {
    expect(deptIndex).to.equal(routerStub);
  });

  describe('GET /api/depts', function() {
    it('should route to dept.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'deptCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/depts/:id', function() {
    it('should route to dept.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'deptCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/depts', function() {
    it('should route to dept.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'deptCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/depts/:id', function() {
    it('should route to dept.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'deptCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/depts/:id', function() {
    it('should route to dept.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'deptCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/depts/:id', function() {
    it('should route to dept.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'deptCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
