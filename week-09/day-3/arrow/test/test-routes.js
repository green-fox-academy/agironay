'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../route');

test('testing GET /yondu endpoint', (t) => {
  request(app)
    .get('/yondu?distance=100&time=10')
    .set('accept', 'application/json')
    .expect('content-type', 'application/json; charset=utf-8')
    .end((err, res) => {
      if (err) throw err;
      t.equal(res.status, 200);
      t.same(res.body, { distance: '100', time: '10', speed: '10' })
      t.end();
    })
})