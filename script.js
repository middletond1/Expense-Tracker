const expenseInput = document.querySelector('#expense');
const amountInput = document.querySelector('#amount');
const dateInput = document.querySelector('#date');
const locationInput = document.querySelector('#store');
const table = document.querySelector('#expensetable');
let expenseArray = JSON.parse(localStorage.getItem('expenseArray')) || [];


function getDate() {
    const date = dateInput.value;
    return date;
}

function parseDate(date) {
    const day = date.substr(8, 2);
    return day;
}

function parseMonth(date) {
    const month = parseInt(date.substr(5, 2)) - 1;
    return month;
}

function monthToCalendar(month) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    return months[month];
}

function parseYear(date) {
    const year = date.substr(0, 4);
    return year;
}

function createTableData(item) {
    const tableData = document.createElement('td');
    tableData.appendChild(document.createTextNode(item));
    return tableData;
}

function createTableRow() {
    const tableRow = document.createElement('tr');
    tableRow.classList.add('row');
    return tableRow;
}

function createDeleteButton(expense) {
    const deleteButton = document.createElement('button');
    deleteButton.classList = 'delete';
    deleteButton.appendChild(document.createTextNode('Remove'));
    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        deleteRow(deleteButton, expense.id);
    });
    return deleteButton;
}

function deleteRow(element, id) {
    element.parentElement.parentElement.remove();
    deleteLocalStorageExpense(id)
}

function deleteLocalStorageExpense(id) {
    expenseArray = expenseArray.filter((expenseItem) => {
        return expenseItem.id !== id;
    });
    pushToLocalStorage(expenseArray);
}

function buildTable(expense) {
    const row = createTableRow();
    row.appendChild(createTableData(expense.item));
    row.appendChild(createTableData(expense.amount));
    row.appendChild(createTableData(expense.date));
    row.appendChild(createTableData(expense.location));
    const deleteRow = document.createElement('td');
    deleteRow.appendChild(createDeleteButton(expense));
    row.appendChild(deleteRow);
    table.appendChild(row);
}

function drawTable() {
    if (
        !expenseInput.value ||
        !amountInput.value ||
        !dateInput.value ||
        !locationInput.value
    ) {
        alert('Please fill out all input fields before submitting.')
    }
    const newExpense = {
        id: Date.now(),
        item: expenseInput.value,
        amount: amountInput.value,
        date: `${monthToCalendar(parseMonth(getDate()))} ${parseDate(getDate())}, ${parseYear(getDate())}`,
        location: locationInput.value
    };

    addNewExpense(newExpense);
    document.getElementById('expenseForm').reset();
}

function addNewExpense(expense) {
    buildTable(expense);
    expenseArray.push(expense);
    pushToLocalStorage(expenseArray);
}

function pushToLocalStorage(array) {
    localStorage.setItem('expenseArray', JSON.stringify(array));
}

document.querySelector('#submitbutton').addEventListener('click', drawTable);
table.addEventListener('click', deleteRow);

window.addEventListener('load', (e) => {
    e.preventDefault();
    expenseArray.forEach((expense) => {
        buildTable(expense);
    });
});