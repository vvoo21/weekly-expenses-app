import Budget from './Budget.js';
import UI from './UI.js';

let budget;

const askBudget = (e) => {
  e.preventDefault();

  const userBudget = document.querySelector('#ask-budget').value;

  if (userBudget === '' || userBudget === null || Number.isNaN(Number(userBudget)) || userBudget <= 0) {
    const divMessage = document.createElement('div');
    divMessage.classList.add('alert');
    divMessage.textContent = 'Invalid amount';
    document.querySelector('.ask-budget-section').appendChild(divMessage);
    setTimeout(() => {
      divMessage.remove();
    }, 1000);
    return
  }

  budget = new Budget(userBudget);

  UI.addBudget(budget);

  document.querySelector('.ask-budget-section').style.display = 'none';
};

export default askBudget;