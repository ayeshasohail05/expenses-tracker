// let expencse=[];
// let totalAmount = 0;

// const categoryselect = document.getElementById('category-select');
// const amountInput = document.getElementById('amount-input');
// const  dateInput= document.getElementById('date-input');
// const  addBtn= document.getElementById('add-btn');
// const  expencseTablebody = document.getElementById('espencse-table-body');
// const totalAmountcell = document.getElementById('total-amount');

// addBtn.addEventListener('click', function(){
//     const category = categoryselect.value;
//     const amount = Number(amountInput.value);
//     const date = dateInput.value;

//     if(category===''){
//         alert('Please select a category');
//         return;
//     }
//     if(isNaN(amount) || amount <= 0){
//         alert('Please enter a valid amount');
//         return;
//     }
//     if(date === ''){
//         alert('Please select a date');
//         return;
//     }
//     expencse.push({category, amount, date});

//     totalAmount += amount;
//     totalAmountcell.textContent = totalAmount;

//     const newRow = expencseTablebody.insertRow();

//     const categoryCell = newRow.insertCell();
//     const AmountCell = newRow.insertCell();
//     const dateCell = newRow.insertCell();   
//     const deleteCell = newRow.insertCell();

//     const deleteBtn = document.createElement('button');

//     deleteBtn.textContent = 'Delete';
//     deleteBtn.addEventListener('click', function(){
//         expencse.splice(expencse.indexOf(expencse),1);

//         totalAmount -= expencse-amount;
//         totalAmountcell.textContent = totalAmount;

//         expencseTablebody.removeChild(newRow);
//     })
//     const expense= expencse[expencse.length - 1];
//     categoryCell.textContent = expencse.category;
//     AmountCell.textContent = expense.amount;
//     dateCell.textContent = expense.date;
//     deleteCell.appendChild(deleteBtn);


// })
// for(const expense of expense){

//      totalAmount += amount;
//     totalAmountcell.textContent = totalAmount;

//     const newRow = expencseTablebody.insertRow();

//     const categoryCell = newRow.insertCell();
//     const AmountCell = newRow.insertCell();
//     const dateCell = newRow.insertCell();   
//     const deleteCell = newRow.insertCell();

//     const deleteBtn = document.createElement('button');

//     deleteBtn.textContent = 'Delete';
//     deleteBtn.addEventListener('click', function(){
//         expencse.splice(expencse.indexOf(expencse),1);

//         totalAmount -= expencse-amount;
//         totalAmountcell.textContent = totalAmount;

//         expencseTablebody.removeChild(newRow);
//     })
//     const expense= expencse[expencse.length - 1];
//     categoryCell.textContent = expencse.category;
//     AmountCell.textContent = expense.amount;
//     dateCell.textContent = expense.date;
//     deleteCell.appendChild(deleteBtn);

// }
let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('espencse-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function () {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }

    const expense = { category, amount, date };
    expenses.push(expense);

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-button';

        deleteBtn.addEventListener('click', function () {
            const index = expenses.indexOf(expense);
            if (index > -1) {
                expenses.splice(index, 1);
                totalAmount -= expense.amount;
                totalAmountCell.textContent = totalAmount;
                expenseTableBody.removeChild(newRow);
            }
        });
    
        deleteCell.appendChild(deleteBtn);
    });