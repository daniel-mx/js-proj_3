'use strict';

let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],

	expensesItem = document.getElementsByClassName('expenses-item'),
	optionalBtn = document.getElementsByTagName('button')[1],
	expensesBtn = document.getElementsByTagName('button')[0],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	income = document.querySelectorAll('#income'),
	savings = document.querySelectorAll('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percent = document.querySelectorAll('#percent'),

	monthsavingsValue = document.querySelectorAll('.monthsavings-value')[0],
	yearsavingsValue = document.querySelectorAll('.yearsavings-value')[0],
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');

			if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
				a != "" && b != "" && a.length < 50) {
				console.log("done");
				appData.expenses[a] = b;
			} else {
				console.log("Вы не ввели данные");
				i--;
			}
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб");
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?", ""),
				percent = +prompt("Под какой процент?", "");

			appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses() {
		for (let i = 1; i < 4; i++) {
			let answer = prompt("Статья необязательных расходов?", "");
			appData.optionalExpenses[i] = answer;
		}
	},
	chooseIncome: function () {

		let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
		if (typeof (items) != "string" || items == "" || items == undefined) {
			alert("вы не ввели данные");
		} else {
			appData.income = items.split(', ');
			appData.income.push(prompt("Может что то еще?", ""));
			appData.income.sort();
		}

		appData.income.forEach(function (itemmassive, i) {
			alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
		});



		console.log("Наша программа включает в себя данные:");
		for (let key in appData) {
			console.log(key + " - " + appData[key]);
		}




	}

};