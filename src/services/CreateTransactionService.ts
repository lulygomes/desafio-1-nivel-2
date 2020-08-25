import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({title,type,value}: Transaction): Transaction {
    const transactions = this.transactionsRepository.all()

    if (transactions.length > 0){
      const balance = this.transactionsRepository.getBalance(transactions)
      if (type === 'outcome' && value > balance.total){
        throw Error('Valor não disponível para retirada.')
      }
    }

    const data = {
      id: '0',
      title,
      type,
      value,
    }

    const transaction = this.transactionsRepository.create(data)

    return transaction;
  }
}

export default CreateTransactionService;
