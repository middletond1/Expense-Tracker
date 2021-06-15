const expenseInput = document.querySelector('#expense');
const amountInput = document.querySelector('#amount');
const dateInput = document.querySelector('#date');
const storeInput = document.querySelector('#store');
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
    const store = storeInput.value;
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

function buildTable(expense, amount, date, store) {
    const row = createTableRow();
    const deleteRow = document.createElement('td');
    deleteRow.appendChild(createDeleteButton());
    row.appendChild(createTableData(expense));
    row.appendChild(createTableData(amount));
    row.appendChild(createTableData(date));
    row.appendChild(createTableData(store));
    row.appendChild(deleteRow);
    table.appendChild(row);
}

function drawTable() {
    if (getExpense() === '' || getAmount() === `$${NaN}` || getDate() == '') {
        return;
    }
    const expense = getExpense();
    const amount = getAmount();
    const date = `${monthToCalendar(parseMonth(getDate()))} ${parseDate(getDate())}, ${parseYear(getDate())}`;
    const store = getStore();
    buildTable(expense, amount, date, store);
    expenseInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
    storeInput.value = '';
}

document.querySelector('#submitbutton').addEventListener('click', drawTable);
table.addEventListener('click', deleteRow);