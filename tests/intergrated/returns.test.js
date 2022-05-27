const {Rental} = require('../../models/rental');
const {Customer} = require('../../models/customer');
const request = require('supertest');
const mongoose = require('mongoose');

describe('/api/returns', () => {
  let server;
  let customerId;
  let movieId;
  let rental;
  let customer;

  beforeEach(async() => { 
    server = require('../../index'); 
    customerId = mongoose.Types.ObjectId();
    movieId = mongoose.Types.ObjectId();

    rental = new Rental({
      customer: {
        _id: customerId,
        name: '12345',
        phone: '12345'
      },
      movie: {
        _id: movieId,
        title: "12345",
        dailyRentalRate: 2
      }
    })
   await rental.save();
  });
  
  afterEach(async () => {
  await server.close();
  await rental.remove({});
  });

  // write test 
  it('should return', async() => {
    const result = await Rental.findById(rental._id);
    expect(result).not.toBeNull()
  });

  it('should return return 401', async() => {
    const res = request(server)
    .post('/api/return')
    .send({customerId, movieId});
    expect(res).toContain(customerId, movieId);
  });

  // Testing for client asin customer 
  beforeEach(async() => { 
    server = require('../../index'); 
    customer = new Customer({
      id: customerId,
      name: '12345',
      phone: '12345'
    });
    await customer.save();
  });
  afterEach(async () => {
    await customer.remove({});
    await server.close();
  });

  // write test 
  it('should return 401 if client is not logged in', async() => {
    const result = await Customer.findById(customer.id);
    expect(result).not.toBeNull()
  })
})