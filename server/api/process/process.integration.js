'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newProcess;

describe('Process API:', function() {
  describe('GET /api/processes', function() {
    var processs;

    beforeEach(function(done) {
      request(app)
        .get('/api/processes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          processs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(processs).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/processes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/processes')
        .send({
          name: 'New Process',
          info: 'This is the brand new process!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newProcess = res.body;
          done();
        });
    });

    it('should respond with the newly created process', function() {
      expect(newProcess.name).to.equal('New Process');
      expect(newProcess.info).to.equal('This is the brand new process!!!');
    });
  });

  describe('GET /api/processes/:id', function() {
    var process;

    beforeEach(function(done) {
      request(app)
        .get(`/api/processes/${newProcess._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          process = res.body;
          done();
        });
    });

    afterEach(function() {
      process = {};
    });

    it('should respond with the requested process', function() {
      expect(process.name).to.equal('New Process');
      expect(process.info).to.equal('This is the brand new process!!!');
    });
  });

  describe('PUT /api/processes/:id', function() {
    var updatedProcess;

    beforeEach(function(done) {
      request(app)
        .put(`/api/processes/${newProcess._id}`)
        .send({
          name: 'Updated Process',
          info: 'This is the updated process!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedProcess = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedProcess = {};
    });

    it('should respond with the updated process', function() {
      expect(updatedProcess.name).to.equal('Updated Process');
      expect(updatedProcess.info).to.equal('This is the updated process!!!');
    });

    it('should respond with the updated process on a subsequent GET', function(done) {
      request(app)
        .get(`/api/processes/${newProcess._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let process = res.body;

          expect(process.name).to.equal('Updated Process');
          expect(process.info).to.equal('This is the updated process!!!');

          done();
        });
    });
  });

  describe('PATCH /api/processes/:id', function() {
    var patchedProcess;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/processes/${newProcess._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Process' },
          { op: 'replace', path: '/info', value: 'This is the patched process!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedProcess = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedProcess = {};
    });

    it('should respond with the patched process', function() {
      expect(patchedProcess.name).to.equal('Patched Process');
      expect(patchedProcess.info).to.equal('This is the patched process!!!');
    });
  });

  describe('DELETE /api/processes/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/processes/${newProcess._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when process does not exist', function(done) {
      request(app)
        .delete(`/api/processes/${newProcess._id}`)
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
