import Budget from './Budget.js';
import UI from './UI.js';

let budget;

const askBudget = () => {
  const userBudget = prompt('What is your budget?');

  if (userBudget === '' || userBudget === null || Number.isNaN(Number(userBudget)) || userBudget <= 0) {
    window.location.reload();
  }

  budget = new Budget(userBudget);

  UI.addBudget(budget);
};

export default askBudget;