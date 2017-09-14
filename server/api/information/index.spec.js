'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var informationCtrlStub = {
  index: 'informationCtrl.index',
  show: 'informationCtrl.show',
  create: 'informationCtrl.create',
  upsert: 'informationCtrl.upsert',
  patch: 'informationCtrl.patch',
  destroy: 'informationCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var informationIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './information.controller': informationCtrlStub
});

describe('Information API Router:', function() {
  it('should return an express router instance', function() {
    expect(informationIndex).to.equal(routerStub);
  });

  describe('GET /api/informations', function() {
    it('should route to information.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'informationCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/informations/:id', function() {
    it('should route to information.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'informationCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/informations', function() {
    it('should route to information.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'informationCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/informations/:id', function() {
    it('should route to information.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'informationCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/informations/:id', function() {
    it('should route to information.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'informationCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/informations/:id', function() {
    it('should route to information.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'informationCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
