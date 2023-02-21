import UI from './UI.js';
import { budget } from './askBudget.js';

const addExpense = (e) => {
  e.preventDefault();

  const name = document.querySelector('#expense').value;
  const amount = Number(document.querySelector('#amount').value);

  if (name === '' || amount === '') {
    UI.printAlert('Both fields are required', 'error');
  } else if (amount <= 0 || Number.isNaN(amount)) {
    UI.printAlert('Invalid amount', 'error');
  }

  const expense = { name, amount, id: Date.now() };

  budget.newExpense(expense);
};

export default addExpense;