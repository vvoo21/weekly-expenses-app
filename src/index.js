import './style.css';
import askBudget, { addExpense } from './modules/functions.js';
import { askBudgetForm, form } from './modules/variables.js';

askBudgetForm.addEventListener('submit', askBudget);

form.addEventListener('submit', addExpense);

export const hola = 'hol';