import './style.css';

const form = document.querySelector('#form');

document.addEventListener('DOMContentLoaded', askBudget);

form.addEventListener('submit', addExpense);