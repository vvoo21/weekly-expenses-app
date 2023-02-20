class UI {
    static addBudget(amount) {
      const { budget, remaining } = amount;
      document.querySelector('#total').textContent = budget;
      document.querySelector('#remaining').textContent = remaining;
    }
  }