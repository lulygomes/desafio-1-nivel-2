import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {

    return this.transactions;
  }

  public getBalance(transactions: Transaction[]): Balance {
    const sumValues = (acc: number, cur: number) => acc + cur

    const totalIncome = transactions.map(transaction => {
      if (transaction.type === 'income') {
        return transaction.value
      } else { return 0}
    }).reduce(sumValues)

    const totalOutcome = transactions.map(transaction => {
      if (transaction.type === 'outcome') {
        return transaction.value
      } else { return 0}
    }).reduce(sumValues)

    const total: number = totalIncome - totalOutcome

    const balance: Balance = {
      income: totalIncome,
      outcome: totalOutcome,
      total
    }

    return balance;
  }

  public create(data: Transaction): Transaction {
    const transaction = new Transaction (data)
    this.transactions.push( transaction )

    return transaction;
  }
}

export default TransactionsRepository;
