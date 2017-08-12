'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newProgram;

describe('Program API:', function() {
  describe('GET /api/programs', function() {
    var programs;

    beforeEach(function(done) {
      request(app)
        .get('/api/programs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          programs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(programs).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/programs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/programs')
        .send({
          name: 'New Program',
          info: 'This is the brand new program!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newProgram = res.body;
          done();
        });
    });

    it('should respond with the newly created program', function() {
      expect(newProgram.name).to.equal('New Program');
      expect(newProgram.info).to.equal('This is the brand new program!!!');
    });
  });

  describe('GET /api/programs/:id', function() {
    var program;

    beforeEach(function(done) {
      request(app)
        .get(`/api/programs/${newProgram._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          program = res.body;
          done();
        });
    });

    afterEach(function() {
      program = {};
    });

    it('should respond with the requested program', function() {
      expect(program.name).to.equal('New Program');
      expect(program.info).to.equal('This is the brand new program!!!');
    });
  });

  describe('PUT /api/programs/:id', function() {
    var updatedProgram;

    beforeEach(function(done) {
      request(app)
        .put(`/api/programs/${newProgram._id}`)
        .send({
          name: 'Updated Program',
          info: 'This is the updated program!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedProgram = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedProgram = {};
    });

    it('should respond with the updated program', function() {
      expect(updatedProgram.name).to.equal('Updated Program');
      expect(updatedProgram.info).to.equal('This is the updated program!!!');
    });

    it('should respond with the updated program on a subsequent GET', function(done) {
      request(app)
        .get(`/api/programs/${newProgram._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let program = res.body;

          expect(program.name).to.equal('Updated Program');
          expect(program.info).to.equal('This is the updated program!!!');

          done();
        });
    });
  });

  describe('PATCH /api/programs/:id', function() {
    var patchedProgram;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/programs/${newProgram._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Program' },
          { op: 'replace', path: '/info', value: 'This is the patched program!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedProgram = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedProgram = {};
    });

    it('should respond with the patched program', function() {
      expect(patchedProgram.name).to.equal('Patched Program');
      expect(patchedProgram.info).to.equal('This is the patched program!!!');
    });
  });

  describe('DELETE /api/programs/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/programs/${newProgram._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when program does not exist', function(done) {
      request(app)
        .delete(`/api/programs/${newProgram._id}`)
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
