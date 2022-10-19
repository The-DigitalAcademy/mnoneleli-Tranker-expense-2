console.log('Aplication started');

//------------------------------inputs------------------------------------------
let inputName = document.getElementById('name');
let inputAmount = document.getElementById('amount');
let btnAdd = document.getElementById('addExpenseBtn');
let btnExpense = document.getElementById('expenses');

let incomelistDom = document.getElementById('income-list');
let expenselistDom = document.getElementById('expense-list');

//-------------------------------Expenses---------------------------------
let Expenses = {
    inc: {
        list: [],
        total: 0
    },
    exp: {
        list: [],
        total: 0
    },
    total: 0
};

const EXP_TYPES = {
    inc: 'income',
    exp: 'expense'
}
