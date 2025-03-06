import express from 'express';
import {
  createQuack,
  getAllQuacks,
  getQuackById,
  updateQuack,
  deleteQuack
} from '../controllers/quackController.js';

const router = express.Router();

router.post('/', createQuack);
router.get('/', getAllQuacks);
router.get('/:id', getQuackById);
router.put('/:id', updateQuack);
router.delete('/:id', deleteQuack);

export default router;