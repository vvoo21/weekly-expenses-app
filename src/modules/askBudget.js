import Budget from './Budget.js';

let budget;

const askBudget = () => {
    const userBudget = Number(prompt('What is your budget?'));
  
    if (userBudget === '' || userBudget === null || Number.isNaN(userBudget) || userBudget <= 0) {
      window.location.reload();
    }
  
    budget = new Budget(userBudget);
  
    UI.addBudget(budget);
  };
  
  export default askBudget;