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
      newExpense.classList.add('flex', 'list', 'inputs');

      const nameExpense = document.createElement('p');
      nameExpense.textContent = name;
      nameExpense.classList.add('name-expense');
      newExpense.appendChild(nameExpense);

      const spanAmount = document.createElement('span');
      spanAmount.textContent = `$ ${amount}`;
      spanAmount.classList.add('span-amount', 'white-text');
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
}

export default UI;