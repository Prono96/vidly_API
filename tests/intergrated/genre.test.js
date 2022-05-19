const mongoose = require('mongoose');
const request = require('supertest');
const {Genre} = request('../../models/genre');



let server;




describe('/api/genres', ()=>{
  jest.useFakeTimers();

  beforeEach(() => { server = require('../../index'); });
  afterEach(async () => {
  server.close();
  await Genre.remove({});
  });
  describe('GET /', () => {
    it('should return all the genres', async () => {
      await Genre.collection.insertMany([
        {name: 'genre1'},
        {name: 'genre2'} 
      ]);
      const res = await request(server).get('/api/genres');
      expect(res.status).toBe(500);
      expect(res.body.length).toBe(2);
      expect(res.body.some(g => g.name === 'genre1')).toBeTruthy();
    })
  });

  describe('GET /:id',  () => {
    it('should return a genre if the id is valid', async () => {
      const genre = new Genre({name: 'genre1'});
      await genre.save();

      const res = await request(server).get('/api/genres/' + genre._id);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('name', genre.name);

    });

    it('should return a 404 if the id is invalid', async () => {  

      const res = await request(server).get('/api/genres/1');
      expect(res.status).toBe(400);
     
    });
  });

  // Testing for genre post 
  describe('POST /', () => {
    it('should return a 401 error if user is not logged in', async() => {
      const res = await request(server).post('api/genres').send({name: 'genre1'});
      expect(res).toBe(401);
    })
  })
});