
import transactionHistory from "./data/transactions.js";
console.log(transactionHistory);
{/* <tr>
         <td>ID транзакции</td>
         <td>Сумма</td>
         <td>Дата</td>
         <td>Кто</td>
         <td>Тип транзакции</td>
         <td>Имя счета</td>
         <td>Номер счета</td>
    </tr> */}

const makeTransactionsTableRowMarkup = (transaction) => {  // transaction диструктуризируем в (id, amount, date, type,bussines, name, account) 
const {
 id, 
 amount, 
 date, 
 type,
 business, 
name, 
account} = transaction; 

 //<td>${transaction.id}</td>
 //<td>${transaction.ammount}</td>
 //<td>${transaction.date}</td>
 //<td>${transaction.bussines}</td>
 //<td>${transaction.type}</td>
 //<td>${transaction.name}</td>
 //<td>${transaction.account}</td>  // => деструктуризировали

 return `  
    <tr>
       <td>${id}</td>
       <td>${amount}</td>
       <td>${date}</td>
       <td>${business}</td>
       <td>${type}</td>
       <td>${name}</td>
       <td>${account}</td>
    </tr>
    `
};

console.log(transactionHistory);
console.log(makeTransactionsTableRowMarkup(transactionHistory[0]));

const tableEl = document.querySelector('.js-transactions-table');

const makeTransactionTableRows = transactionHistory.map(makeTransactionsTableRowMarkup).join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);

console.log(makeTransactionTableRows)
