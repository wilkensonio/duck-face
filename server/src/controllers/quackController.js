import Quack from '../models/quackModel.js';

export const createQuack = async (req, res) => {
  try {
    const newQuack = new Quack(req.body);
    await newQuack.save();
    res.status(201).json(newQuack);
  } catch (error) {
    res.status(500).json({ message: 'Error creating quack', error });
  }
};

export const getAllQuacks = async (req, res) => {
  try {
    const quacks = await Quack.find();
    res.status(200).json(quacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quacks', error });
  }
};

export const getQuackById = async (req, res) => {
  try {
    const quack = await Quack.findById(req.params.id);
    if (!quack) {
      return res.status(404).json({ message: 'Quack not found' });
    }
    res.status(200).json(quack);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quack', error });
  }
};

export const updateQuack = async (req, res) => {
  try {
    const updatedQuack = await Quack.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedQuack) {
      return res.status(404).json({ message: 'Quack not found' });
    }
    res.status(200).json(updatedQuack);
  } catch (error) {
    res.status(500).json({ message: 'Error updating quack', error });
  }
};

export const deleteQuack = async (req, res) => {
  try {
    const deletedQuack = await Quack.findByIdAndDelete(req.params.id);
    if (!deletedQuack) {
      return res.status(404).json({ message: 'Quack not found' });
    }
    res.status(200).json({ message: 'Quack deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting quack', error });
  }
};
