'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDept;

describe('Dept API:', function() {
  describe('GET /api/depts', function() {
    var depts;

    beforeEach(function(done) {
      request(app)
        .get('/api/depts')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          depts = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(depts).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/depts', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/depts')
        .send({
          name: 'New Dept',
          info: 'This is the brand new dept!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDept = res.body;
          done();
        });
    });

    it('should respond with the newly created dept', function() {
      expect(newDept.name).to.equal('New Dept');
      expect(newDept.info).to.equal('This is the brand new dept!!!');
    });
  });

  describe('GET /api/depts/:id', function() {
    var dept;

    beforeEach(function(done) {
      request(app)
        .get(`/api/depts/${newDept._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          dept = res.body;
          done();
        });
    });

    afterEach(function() {
      dept = {};
    });

    it('should respond with the requested dept', function() {
      expect(dept.name).to.equal('New Dept');
      expect(dept.info).to.equal('This is the brand new dept!!!');
    });
  });

  describe('PUT /api/depts/:id', function() {
    var updatedDept;

    beforeEach(function(done) {
      request(app)
        .put(`/api/depts/${newDept._id}`)
        .send({
          name: 'Updated Dept',
          info: 'This is the updated dept!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDept = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDept = {};
    });

    it('should respond with the updated dept', function() {
      expect(updatedDept.name).to.equal('Updated Dept');
      expect(updatedDept.info).to.equal('This is the updated dept!!!');
    });

    it('should respond with the updated dept on a subsequent GET', function(done) {
      request(app)
        .get(`/api/depts/${newDept._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let dept = res.body;

          expect(dept.name).to.equal('Updated Dept');
          expect(dept.info).to.equal('This is the updated dept!!!');

          done();
        });
    });
  });

  describe('PATCH /api/depts/:id', function() {
    var patchedDept;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/depts/${newDept._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Dept' },
          { op: 'replace', path: '/info', value: 'This is the patched dept!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDept = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDept = {};
    });

    it('should respond with the patched dept', function() {
      expect(patchedDept.name).to.equal('Patched Dept');
      expect(patchedDept.info).to.equal('This is the patched dept!!!');
    });
  });

  describe('DELETE /api/depts/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/depts/${newDept._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when dept does not exist', function(done) {
      request(app)
        .delete(`/api/depts/${newDept._id}`)
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
