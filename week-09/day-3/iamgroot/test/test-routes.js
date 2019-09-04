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

test('testing GET /yondu endpoint',(t)=>{
  request(app)
  .get('/yondu?distance=100&time=10')
  .set('accept', 'application/json')
  .expect('content-type', 'application/json;charset=utf-8')
  .end((err, res)=>{
    t.equal(res.status, 200);
    t.same(res.body, {distance: '100', time: '10', speed: '10'})
    t.end();
  })
})