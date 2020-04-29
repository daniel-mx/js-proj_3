'use strict';

let btn = document.getElementById('start'),
    value = document.getElementsByClassName('-value'),
    // input = document.getElementsByTagName('input'),
    expenses = document.getElementsByClassName('expenses-item'),
    optionalBtn = document.getElementsByTagName('button')[0],
    expensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    income = document.querySelectorAll('#income'),
    savings = document.querySelectorAll('#savings'),
    percent = document.querySelectorAll('#percent'),
    daybudgetValue = document.querySelectorAll('.daybudget-value'),
    monthsavingsValue = document.querySelectorAll('.monthsavings-value'),
    yearsavingsValue = document.querySelectorAll('.yearsavings-value');
