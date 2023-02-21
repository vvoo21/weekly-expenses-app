import { formSection, listGroup } from './variables.js';

class UI {
  static addBudget(amount) {
    const { budget, remaining } = amount;
    document.querySelector('#total').textContent = budget;
    document.querySelector('#remaining').textContent = remaining;
  }

  static printAlert(message, type) {
    const divMessage = document.createElement('div');
    divMessage.classList.add('alert');

    if (type === 'error') {
      divMessage.classList.add('error');
    } else {
      divMessage.classList.add('success');
    }

    divMessage.textContent = message;
    formSection.insertBefore(divMessage, formSection.children[1]);

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

      const nameExpense = document.createElement('p');
      nameExpense.textContent = name;
      newExpense.appendChild(nameExpense);

      const spanAmount = document.createElement('span');
      spanAmount.textContent = amount;
      newExpense.appendChild(spanAmount);

      const btnDelete = document.createElement('button');
      btnDelete.setAttribute('type', 'button');
      btnDelete.textContent = 'Delete x';
      newExpense.appendChild(btnDelete);

      listGroup.appendChild(newExpense);
    });
  }

  static cleanHTML() {
    while (listGroup.firstChild) {
      listGroup.removeChild(listGroup.firstChild);
    }
  }
}

export default UI;