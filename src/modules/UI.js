import { form, listGroup } from './variables.js';
/* eslint-disable */
import { deleteExpenses } from './functions.js';
/* eslint-disable */

class UI {
  static addBudget(amount) {
    const { budget, remaining } = amount;
    document.querySelector('#total').textContent = `$${budget}`;
    document.querySelector('#remaining').textContent = `$${remaining}`;
  }

  static printAlert(message, type) {
    const divMessage = document.createElement('div');
    divMessage.classList.add('alert-success');

    if (type === 'error') {
      divMessage.classList.add('alert');
    } else {
      divMessage.classList.add('success');
    }

    divMessage.textContent = message;
    form.appendChild(divMessage);

    setTimeout(() => {
      divMessage.remove();
    }, 2000);
  }

  static addExpenseList(expenses) {
    this.cleanHTML();

    expenses.forEach((expense) => {
      const { name, amount, id } = expense;

      const newExpense = document.createElement('li');
      newExpense.id = id;
      newExpense.classList.add('flex', 'list');

      const nameExpense = document.createElement('p');
      nameExpense.textContent = `◇ ${name}`;
      nameExpense.classList.add('span-name-amount');
      newExpense.appendChild(nameExpense);

      const spanAmount = document.createElement('span');
      spanAmount.textContent = `$ ${amount}`;
      spanAmount.classList.add('span-name-amount');
      newExpense.appendChild(spanAmount);

      const btnDelete = document.createElement('button');
      btnDelete.setAttribute('type', 'button');
      btnDelete.classList.add('btn-red');
      btnDelete.textContent = 'X';
      btnDelete.onclick = () => {
        deleteExpenses(id);
      };
      newExpense.appendChild(btnDelete);

      listGroup.appendChild(newExpense);
    });
  }

  static cleanHTML() {
    while (listGroup.firstChild) {
      listGroup.removeChild(listGroup.firstChild);
    }
  }

  static updateRemaining(remaining) {
    document.querySelector('#remaining').textContent = remaining;
  }

  static checkBudget(budgetObj) {
    const { remaining } = budgetObj;

    if(remaining <= 0) {
      UI.printAlert('Your budget has been exhausted', 'error');
      form.querySelector('button[type="submit"]').disabled = true;
      return
    } else {
      form.querySelector('button[type="submit"]').disabled = false;
    }
  }
}

export default UI;