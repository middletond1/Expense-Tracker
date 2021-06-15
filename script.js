const expenseInput = document.querySelector('#expense');
const amountInput = document.querySelector('#amount');
const dateInput = document.querySelector('#date');
const locationInput = document.querySelector('#store');
const table = document.querySelector('#expensetable');


function getExpense() {
    const expense = expenseInput.value;
    return expense;
}

function getAmount() {
    const amount = `$${parseFloat(amountInput.value).toFixed(2)}`;
    return amount;
}

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

function getStore() {
    const store = locationInput.value;
    return store;
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

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.classList = 'delete';
    deleteButton.appendChild(document.createTextNode('Remove'));
    return deleteButton;
}

function deleteRow(element) {
    if (element.target.classList.contains('delete')) {
        element.target.closest('tr').remove();
    }
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
}

document.querySelector('#submitbutton').addEventListener('click', drawTable);
table.addEventListener('click', deleteRow);