'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('testing GET /groot endpoint', (t) => {
  request(app)
    .get('/groot?message=somemessage')
    .set('accept', 'application/json')
    .expect('content-type', 'application/json; charset=utf-8')
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 200);
      t.same(resp.body, { received: 'somemessage', translated: 'I am groot!'});
      t.end();
    });
});