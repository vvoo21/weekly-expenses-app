class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.remaining = Number(budget);
    this.expenses = [];
  }

  newExpense(expense) {
    this.expenses = [...this.expenses, expense];

    this.calculateRemaining();
  }

  calculateRemaining() {
    const spent = this.expenses.reduce((total, expense) => total + expense.amount, 0);

    this.remaining = this.budget - spent;
  }
}

export default Budget;