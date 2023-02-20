const formSection = document.querySelector('.form-section');

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
}