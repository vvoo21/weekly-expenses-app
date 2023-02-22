import Budget from './Budget.js';
import UI from './UI.js';
import { askBudgetSection, form } from './variables.js';

let budget;

const askBudget = (e) => {
  e.preventDefault();

  const userBudget = document.querySelector('#ask-budget').value;

  if (userBudget === '' || userBudget === null || Number.isNaN(Number(userBudget)) || userBudget <= 0) {
    const divMessage = document.createElement('div');
    divMessage.classList.add('alert');
    divMessage.textContent = 'Invalid amount';
    askBudgetSection.appendChild(divMessage);
    setTimeout(() => {
      divMessage.remove();
    }, 1000);
    return;
  }

  budget = new Budget(userBudget);

  UI.addBudget(budget);

  askBudgetSection.style.display = 'none';
};

export const addExpense = (e) => {
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

  UI.printAlert('Expense added correctly');

  const { expenses, remaining } = budget;

  UI.addExpenseList(expenses);

  UI.updateRemaining(remaining);


  form.reset();
};

export const deleteExpenses = (id) => {
  budget.deleteExpenses(id);

  const { expenses, remaining } = budget;
  UI.addExpenseList(expenses);

  UI.updateRemaining(remaining);
}

export default askBudget;
