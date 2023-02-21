import './style.css';
import askBudget from './modules/askBudget.js';
import addExpense from './modules/addExpense.js';

export const form = document.querySelector('#form');
export const formSection = document.querySelector('.form-section');
export const askBudgetForm = document.querySelector('#ask-budget-form');
export const askBudgetSection = document.querySelector('.ask-budget-section');
export const listGroup = document.querySelector('.list-group');

askBudgetForm.addEventListener('submit', askBudget);

form.addEventListener('submit', addExpense);