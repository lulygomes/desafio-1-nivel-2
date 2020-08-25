import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';
import Transaction from '../models/Transaction';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all()
    const balance = transactionsRepository.getBalance(transactions)

    return response.status(200).json({transactions,balance})
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const data  = request.body
    const transactions = transactionsRepository.create(data)

    return response.json(transactions)
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
