const transactions = [
  {
    "id": "uuid",
    "title": "Salário",
    "value": 4000,
    "type": "income"
  },
  {
    "id": "uuid",
    "title": "Freela",
    "value": 2000,
    "type": "income"
  },
  {
    "id": "uuid",
    "title": "Pagamento da fatura",
    "value": 4000,
    "type": "outcome"
  },
  {
    "id": "uuid",
    "title": "Cadeira Gamer",
    "value": 1200,
    "type": "outcome"
  }
]

const somaValores = (acumulador, valorAtual) => acumulador + valorAtual

const totalIncome = transactions.map(transaction => {
  if (transaction.type === 'income') {
    return transaction.value
  } else { return 0}
}).reduce(somaValores)

const totalOutcome = transactions.map(transaction => {
  if (transaction.type === 'outcome') {
    return transaction.value
  } else { return 0}
}).reduce(somaValores)

console.log(totalIncome)
console.log(totalOutcome)
