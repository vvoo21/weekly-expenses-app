import './style.css';
import askBudget from './modules/askBudget.js';
import addExpense from './modules/addExpense.js';

const form = document.querySelector('#form');

document.addEventListener('DOMContentLoaded', askBudget);

form.addEventListener('submit', addExpense);