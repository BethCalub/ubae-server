'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var instructionCtrlStub = {
  index: 'instructionCtrl.index',
  show: 'instructionCtrl.show',
  create: 'instructionCtrl.create',
  upsert: 'instructionCtrl.upsert',
  patch: 'instructionCtrl.patch',
  destroy: 'instructionCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var instructionIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './instruction.controller': instructionCtrlStub
});

describe('Instruction API Router:', function() {
  it('should return an express router instance', function() {
    expect(instructionIndex).to.equal(routerStub);
  });

  describe('GET /api/instructions', function() {
    it('should route to instruction.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'instructionCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/instructions/:id', function() {
    it('should route to instruction.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'instructionCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/instructions', function() {
    it('should route to instruction.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'instructionCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/instructions/:id', function() {
    it('should route to instruction.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'instructionCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/instructions/:id', function() {
    it('should route to instruction.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'instructionCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/instructions/:id', function() {
    it('should route to instruction.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'instructionCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
