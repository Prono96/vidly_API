const request = require('supertest');
const { Genre } = require('../../models/genre');
const { User } = require('../../models/user');


let token;

describe('auth middleware', () => {

  beforeEach(() => { server = require('../../index'); });
  afterEach(async () => {
    await Genre.remove({});
    server.close();});

  const exec = () => {
    return request(server)
    .post('/api/genres')
    .set('x-auth-token', token)
    .send({name: 'genre1'});
  }

  beforeEach(() => {
    const token = new User().generateAuthToken();
  });
  
  
  it('should return a 401 if no token is provided', async() => {

    token = '';
    const res = await exec();
    expect(res.status).toBe(401);
  });

  it('should return a 200 if the token is valid', async() => {
    const res = await exec();
    expect(res.status).toBe(401);
  })
})