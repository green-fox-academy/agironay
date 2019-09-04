'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('testing GET /groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .set('accept', 'application/json')

    t.end();
});