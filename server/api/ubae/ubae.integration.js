'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newUbae;

describe('Ubae API:', function() {
  describe('GET /api/ubae', function() {
    var ubaes;

    beforeEach(function(done) {
      request(app)
        .get('/api/ubae')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          ubaes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(ubaes).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/ubae', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/ubae')
        .send({
          name: 'New Ubae',
          info: 'This is the brand new ubae!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newUbae = res.body;
          done();
        });
    });

    it('should respond with the newly created ubae', function() {
      expect(newUbae.name).to.equal('New Ubae');
      expect(newUbae.info).to.equal('This is the brand new ubae!!!');
    });
  });

  describe('GET /api/ubae/:id', function() {
    var ubae;

    beforeEach(function(done) {
      request(app)
        .get(`/api/ubae/${newUbae._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          ubae = res.body;
          done();
        });
    });

    afterEach(function() {
      ubae = {};
    });

    it('should respond with the requested ubae', function() {
      expect(ubae.name).to.equal('New Ubae');
      expect(ubae.info).to.equal('This is the brand new ubae!!!');
    });
  });

  describe('PUT /api/ubae/:id', function() {
    var updatedUbae;

    beforeEach(function(done) {
      request(app)
        .put(`/api/ubae/${newUbae._id}`)
        .send({
          name: 'Updated Ubae',
          info: 'This is the updated ubae!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedUbae = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedUbae = {};
    });

    it('should respond with the updated ubae', function() {
      expect(updatedUbae.name).to.equal('Updated Ubae');
      expect(updatedUbae.info).to.equal('This is the updated ubae!!!');
    });

    it('should respond with the updated ubae on a subsequent GET', function(done) {
      request(app)
        .get(`/api/ubae/${newUbae._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let ubae = res.body;

          expect(ubae.name).to.equal('Updated Ubae');
          expect(ubae.info).to.equal('This is the updated ubae!!!');

          done();
        });
    });
  });

  describe('PATCH /api/ubae/:id', function() {
    var patchedUbae;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/ubae/${newUbae._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Ubae' },
          { op: 'replace', path: '/info', value: 'This is the patched ubae!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedUbae = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedUbae = {};
    });

    it('should respond with the patched ubae', function() {
      expect(patchedUbae.name).to.equal('Patched Ubae');
      expect(patchedUbae.info).to.equal('This is the patched ubae!!!');
    });
  });

  describe('DELETE /api/ubae/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/ubae/${newUbae._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when ubae does not exist', function(done) {
      request(app)
        .delete(`/api/ubae/${newUbae._id}`)
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
