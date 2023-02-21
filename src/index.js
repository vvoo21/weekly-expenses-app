import './style.css';
import askBudget from './modules/askBudget.js';
import addExpense from './modules/addExpense.js';

const form = document.querySelector('#form');
const askBudgetForm = document.querySelector('#ask-budget-form');

askBudgetForm.addEventListener('submit', askBudget);

form.addEventListener('submit', addExpense);