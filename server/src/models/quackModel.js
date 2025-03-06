import mongoose from 'mongoose';

const quackSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Quack = mongoose.model('Quack', quackSchema);

export default Quack;
