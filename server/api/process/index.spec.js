'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var processCtrlStub = {
  index: 'processCtrl.index',
  show: 'processCtrl.show',
  create: 'processCtrl.create',
  upsert: 'processCtrl.upsert',
  patch: 'processCtrl.patch',
  destroy: 'processCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var processIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './process.controller': processCtrlStub
});

describe('Process API Router:', function() {
  it('should return an express router instance', function() {
    expect(processIndex).to.equal(routerStub);
  });

  describe('GET /api/processes', function() {
    it('should route to process.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'processCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/processes/:id', function() {
    it('should route to process.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'processCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/processes', function() {
    it('should route to process.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'processCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/processes/:id', function() {
    it('should route to process.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'processCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/processes/:id', function() {
    it('should route to process.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'processCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/processes/:id', function() {
    it('should route to process.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'processCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
