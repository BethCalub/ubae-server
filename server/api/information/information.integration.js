'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newInformation;

describe('Information API:', function() {
  describe('GET /api/informations', function() {
    var informations;

    beforeEach(function(done) {
      request(app)
        .get('/api/informations')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          informations = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(informations).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/informations', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/informations')
        .send({
          name: 'New Information',
          info: 'This is the brand new information!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newInformation = res.body;
          done();
        });
    });

    it('should respond with the newly created information', function() {
      expect(newInformation.name).to.equal('New Information');
      expect(newInformation.info).to.equal('This is the brand new information!!!');
    });
  });

  describe('GET /api/informations/:id', function() {
    var information;

    beforeEach(function(done) {
      request(app)
        .get(`/api/informations/${newInformation._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          information = res.body;
          done();
        });
    });

    afterEach(function() {
      information = {};
    });

    it('should respond with the requested information', function() {
      expect(information.name).to.equal('New Information');
      expect(information.info).to.equal('This is the brand new information!!!');
    });
  });

  describe('PUT /api/informations/:id', function() {
    var updatedInformation;

    beforeEach(function(done) {
      request(app)
        .put(`/api/informations/${newInformation._id}`)
        .send({
          name: 'Updated Information',
          info: 'This is the updated information!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedInformation = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedInformation = {};
    });

    it('should respond with the updated information', function() {
      expect(updatedInformation.name).to.equal('Updated Information');
      expect(updatedInformation.info).to.equal('This is the updated information!!!');
    });

    it('should respond with the updated information on a subsequent GET', function(done) {
      request(app)
        .get(`/api/informations/${newInformation._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let information = res.body;

          expect(information.name).to.equal('Updated Information');
          expect(information.info).to.equal('This is the updated information!!!');

          done();
        });
    });
  });

  describe('PATCH /api/informations/:id', function() {
    var patchedInformation;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/informations/${newInformation._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Information' },
          { op: 'replace', path: '/info', value: 'This is the patched information!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedInformation = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedInformation = {};
    });

    it('should respond with the patched information', function() {
      expect(patchedInformation.name).to.equal('Patched Information');
      expect(patchedInformation.info).to.equal('This is the patched information!!!');
    });
  });

  describe('DELETE /api/informations/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/informations/${newInformation._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when information does not exist', function(done) {
      request(app)
        .delete(`/api/informations/${newInformation._id}`)
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
