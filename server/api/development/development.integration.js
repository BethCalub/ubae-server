'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDevelopment;

describe('Development API:', function() {
  describe('GET /api/developments', function() {
    var developments;

    beforeEach(function(done) {
      request(app)
        .get('/api/developments')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          developments = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(developments).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/developments', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/developments')
        .send({
          name: 'New Development',
          info: 'This is the brand new development!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDevelopment = res.body;
          done();
        });
    });

    it('should respond with the newly created development', function() {
      expect(newDevelopment.name).to.equal('New Development');
      expect(newDevelopment.info).to.equal('This is the brand new development!!!');
    });
  });

  describe('GET /api/developments/:id', function() {
    var development;

    beforeEach(function(done) {
      request(app)
        .get(`/api/developments/${newDevelopment._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          development = res.body;
          done();
        });
    });

    afterEach(function() {
      development = {};
    });

    it('should respond with the requested development', function() {
      expect(development.name).to.equal('New Development');
      expect(development.info).to.equal('This is the brand new development!!!');
    });
  });

  describe('PUT /api/developments/:id', function() {
    var updatedDevelopment;

    beforeEach(function(done) {
      request(app)
        .put(`/api/developments/${newDevelopment._id}`)
        .send({
          name: 'Updated Development',
          info: 'This is the updated development!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDevelopment = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDevelopment = {};
    });

    it('should respond with the updated development', function() {
      expect(updatedDevelopment.name).to.equal('Updated Development');
      expect(updatedDevelopment.info).to.equal('This is the updated development!!!');
    });

    it('should respond with the updated development on a subsequent GET', function(done) {
      request(app)
        .get(`/api/developments/${newDevelopment._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let development = res.body;

          expect(development.name).to.equal('Updated Development');
          expect(development.info).to.equal('This is the updated development!!!');

          done();
        });
    });
  });

  describe('PATCH /api/developments/:id', function() {
    var patchedDevelopment;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/developments/${newDevelopment._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Development' },
          { op: 'replace', path: '/info', value: 'This is the patched development!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDevelopment = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDevelopment = {};
    });

    it('should respond with the patched development', function() {
      expect(patchedDevelopment.name).to.equal('Patched Development');
      expect(patchedDevelopment.info).to.equal('This is the patched development!!!');
    });
  });

  describe('DELETE /api/developments/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/developments/${newDevelopment._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when development does not exist', function(done) {
      request(app)
        .delete(`/api/developments/${newDevelopment._id}`)
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
