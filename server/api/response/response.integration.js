'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newResponse;

describe('Response API:', function() {
  describe('GET /api/responses', function() {
    var responses;

    beforeEach(function(done) {
      request(app)
        .get('/api/responses')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          responses = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(responses).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/responses', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/responses')
        .send({
          name: 'New Response',
          info: 'This is the brand new response!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newResponse = res.body;
          done();
        });
    });

    it('should respond with the newly created response', function() {
      expect(newResponse.name).to.equal('New Response');
      expect(newResponse.info).to.equal('This is the brand new response!!!');
    });
  });

  describe('GET /api/responses/:id', function() {
    var response;

    beforeEach(function(done) {
      request(app)
        .get(`/api/responses/${newResponse._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          response = res.body;
          done();
        });
    });

    afterEach(function() {
      response = {};
    });

    it('should respond with the requested response', function() {
      expect(response.name).to.equal('New Response');
      expect(response.info).to.equal('This is the brand new response!!!');
    });
  });

  describe('PUT /api/responses/:id', function() {
    var updatedResponse;

    beforeEach(function(done) {
      request(app)
        .put(`/api/responses/${newResponse._id}`)
        .send({
          name: 'Updated Response',
          info: 'This is the updated response!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedResponse = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedResponse = {};
    });

    it('should respond with the updated response', function() {
      expect(updatedResponse.name).to.equal('Updated Response');
      expect(updatedResponse.info).to.equal('This is the updated response!!!');
    });

    it('should respond with the updated response on a subsequent GET', function(done) {
      request(app)
        .get(`/api/responses/${newResponse._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let response = res.body;

          expect(response.name).to.equal('Updated Response');
          expect(response.info).to.equal('This is the updated response!!!');

          done();
        });
    });
  });

  describe('PATCH /api/responses/:id', function() {
    var patchedResponse;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/responses/${newResponse._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Response' },
          { op: 'replace', path: '/info', value: 'This is the patched response!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedResponse = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedResponse = {};
    });

    it('should respond with the patched response', function() {
      expect(patchedResponse.name).to.equal('Patched Response');
      expect(patchedResponse.info).to.equal('This is the patched response!!!');
    });
  });

  describe('DELETE /api/responses/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/responses/${newResponse._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when response does not exist', function(done) {
      request(app)
        .delete(`/api/responses/${newResponse._id}`)
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
