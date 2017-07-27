'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newOffice;

describe('Office API:', function() {
  describe('GET /api/offices', function() {
    var offices;

    beforeEach(function(done) {
      request(app)
        .get('/api/offices')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          offices = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(offices).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/offices', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/offices')
        .send({
          name: 'New Office',
          info: 'This is the brand new office!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newOffice = res.body;
          done();
        });
    });

    it('should respond with the newly created office', function() {
      expect(newOffice.name).to.equal('New Office');
      expect(newOffice.info).to.equal('This is the brand new office!!!');
    });
  });

  describe('GET /api/offices/:id', function() {
    var office;

    beforeEach(function(done) {
      request(app)
        .get(`/api/offices/${newOffice._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          office = res.body;
          done();
        });
    });

    afterEach(function() {
      office = {};
    });

    it('should respond with the requested office', function() {
      expect(office.name).to.equal('New Office');
      expect(office.info).to.equal('This is the brand new office!!!');
    });
  });

  describe('PUT /api/offices/:id', function() {
    var updatedOffice;

    beforeEach(function(done) {
      request(app)
        .put(`/api/offices/${newOffice._id}`)
        .send({
          name: 'Updated Office',
          info: 'This is the updated office!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedOffice = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOffice = {};
    });

    it('should respond with the updated office', function() {
      expect(updatedOffice.name).to.equal('Updated Office');
      expect(updatedOffice.info).to.equal('This is the updated office!!!');
    });

    it('should respond with the updated office on a subsequent GET', function(done) {
      request(app)
        .get(`/api/offices/${newOffice._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let office = res.body;

          expect(office.name).to.equal('Updated Office');
          expect(office.info).to.equal('This is the updated office!!!');

          done();
        });
    });
  });

  describe('PATCH /api/offices/:id', function() {
    var patchedOffice;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/offices/${newOffice._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Office' },
          { op: 'replace', path: '/info', value: 'This is the patched office!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedOffice = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedOffice = {};
    });

    it('should respond with the patched office', function() {
      expect(patchedOffice.name).to.equal('Patched Office');
      expect(patchedOffice.info).to.equal('This is the patched office!!!');
    });
  });

  describe('DELETE /api/offices/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/offices/${newOffice._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when office does not exist', function(done) {
      request(app)
        .delete(`/api/offices/${newOffice._id}`)
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
