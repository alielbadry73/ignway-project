// Sample test for User model
const mongoose = require('mongoose');
const User = require('../models/User');

describe('User Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/edu-platform-test');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a user', async () => {
    const user = new User({ name: 'Test', email: 'test@example.com', password: '123456', role: 'student' });
    await user.save();
    expect(user._id).toBeDefined();
    await User.deleteOne({ _id: user._id });
  });
});
