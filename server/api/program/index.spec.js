'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var programCtrlStub = {
  index: 'programCtrl.index',
  show: 'programCtrl.show',
  create: 'programCtrl.create',
  upsert: 'programCtrl.upsert',
  patch: 'programCtrl.patch',
  destroy: 'programCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var programIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './program.controller': programCtrlStub
});

describe('Program API Router:', function() {
  it('should return an express router instance', function() {
    expect(programIndex).to.equal(routerStub);
  });

  describe('GET /api/programs', function() {
    it('should route to program.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'programCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/programs/:id', function() {
    it('should route to program.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'programCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/programs', function() {
    it('should route to program.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'programCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/programs/:id', function() {
    it('should route to program.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'programCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/programs/:id', function() {
    it('should route to program.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'programCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/programs/:id', function() {
    it('should route to program.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'programCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
