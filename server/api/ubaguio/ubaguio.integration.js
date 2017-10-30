'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newUbaguio;

describe('Ubaguio API:', function() {
  describe('GET /api/ubaguio', function() {
    var ubaguios;

    beforeEach(function(done) {
      request(app)
        .get('/api/ubaguio')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          ubaguios = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(ubaguios).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/ubaguio', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/ubaguio')
        .send({
          name: 'New Ubaguio',
          info: 'This is the brand new ubaguio!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newUbaguio = res.body;
          done();
        });
    });

    it('should respond with the newly created ubaguio', function() {
      expect(newUbaguio.name).to.equal('New Ubaguio');
      expect(newUbaguio.info).to.equal('This is the brand new ubaguio!!!');
    });
  });

  describe('GET /api/ubaguio/:id', function() {
    var ubaguio;

    beforeEach(function(done) {
      request(app)
        .get(`/api/ubaguio/${newUbaguio._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          ubaguio = res.body;
          done();
        });
    });

    afterEach(function() {
      ubaguio = {};
    });

    it('should respond with the requested ubaguio', function() {
      expect(ubaguio.name).to.equal('New Ubaguio');
      expect(ubaguio.info).to.equal('This is the brand new ubaguio!!!');
    });
  });

  describe('PUT /api/ubaguio/:id', function() {
    var updatedUbaguio;

    beforeEach(function(done) {
      request(app)
        .put(`/api/ubaguio/${newUbaguio._id}`)
        .send({
          name: 'Updated Ubaguio',
          info: 'This is the updated ubaguio!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedUbaguio = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedUbaguio = {};
    });

    it('should respond with the updated ubaguio', function() {
      expect(updatedUbaguio.name).to.equal('Updated Ubaguio');
      expect(updatedUbaguio.info).to.equal('This is the updated ubaguio!!!');
    });

    it('should respond with the updated ubaguio on a subsequent GET', function(done) {
      request(app)
        .get(`/api/ubaguio/${newUbaguio._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let ubaguio = res.body;

          expect(ubaguio.name).to.equal('Updated Ubaguio');
          expect(ubaguio.info).to.equal('This is the updated ubaguio!!!');

          done();
        });
    });
  });

  describe('PATCH /api/ubaguio/:id', function() {
    var patchedUbaguio;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/ubaguio/${newUbaguio._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Ubaguio' },
          { op: 'replace', path: '/info', value: 'This is the patched ubaguio!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedUbaguio = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedUbaguio = {};
    });

    it('should respond with the patched ubaguio', function() {
      expect(patchedUbaguio.name).to.equal('Patched Ubaguio');
      expect(patchedUbaguio.info).to.equal('This is the patched ubaguio!!!');
    });
  });

  describe('DELETE /api/ubaguio/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/ubaguio/${newUbaguio._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when ubaguio does not exist', function(done) {
      request(app)
        .delete(`/api/ubaguio/${newUbaguio._id}`)
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
