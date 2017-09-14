'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newInstruction;

describe('Instruction API:', function() {
  describe('GET /api/instructions', function() {
    var instructions;

    beforeEach(function(done) {
      request(app)
        .get('/api/instructions')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          instructions = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(instructions).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/instructions', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/instructions')
        .send({
          name: 'New Instruction',
          info: 'This is the brand new instruction!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newInstruction = res.body;
          done();
        });
    });

    it('should respond with the newly created instruction', function() {
      expect(newInstruction.name).to.equal('New Instruction');
      expect(newInstruction.info).to.equal('This is the brand new instruction!!!');
    });
  });

  describe('GET /api/instructions/:id', function() {
    var instruction;

    beforeEach(function(done) {
      request(app)
        .get(`/api/instructions/${newInstruction._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          instruction = res.body;
          done();
        });
    });

    afterEach(function() {
      instruction = {};
    });

    it('should respond with the requested instruction', function() {
      expect(instruction.name).to.equal('New Instruction');
      expect(instruction.info).to.equal('This is the brand new instruction!!!');
    });
  });

  describe('PUT /api/instructions/:id', function() {
    var updatedInstruction;

    beforeEach(function(done) {
      request(app)
        .put(`/api/instructions/${newInstruction._id}`)
        .send({
          name: 'Updated Instruction',
          info: 'This is the updated instruction!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedInstruction = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedInstruction = {};
    });

    it('should respond with the updated instruction', function() {
      expect(updatedInstruction.name).to.equal('Updated Instruction');
      expect(updatedInstruction.info).to.equal('This is the updated instruction!!!');
    });

    it('should respond with the updated instruction on a subsequent GET', function(done) {
      request(app)
        .get(`/api/instructions/${newInstruction._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let instruction = res.body;

          expect(instruction.name).to.equal('Updated Instruction');
          expect(instruction.info).to.equal('This is the updated instruction!!!');

          done();
        });
    });
  });

  describe('PATCH /api/instructions/:id', function() {
    var patchedInstruction;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/instructions/${newInstruction._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Instruction' },
          { op: 'replace', path: '/info', value: 'This is the patched instruction!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedInstruction = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedInstruction = {};
    });

    it('should respond with the patched instruction', function() {
      expect(patchedInstruction.name).to.equal('Patched Instruction');
      expect(patchedInstruction.info).to.equal('This is the patched instruction!!!');
    });
  });

  describe('DELETE /api/instructions/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/instructions/${newInstruction._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when instruction does not exist', function(done) {
      request(app)
        .delete(`/api/instructions/${newInstruction._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
