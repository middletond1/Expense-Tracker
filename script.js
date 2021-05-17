function getExpense() {
    const expense = document.querySelector('#expense').value;
    return expense;
}

function getAmount() {
    const amount = `$${parseFloat(document.querySelector('#amount').value).toFixed(2)}`;
    return amount;
}

function getDate() {
    const date = document.querySelector('#date').value;
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
    const store = document.querySelector('#store').value;
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
        element.target.parentElement.remove();
    }
}

function buildTable(expense, amount, date, store) {
    const row = createTableRow();
    const table = document.querySelector('#expensetable');
    row.appendChild(createTableData(expense));
    row.appendChild(createTableData(amount));
    row.appendChild(createTableData(date));
    row.appendChild(createTableData(store));
    row.appendChild(createDeleteButton());
    table.appendChild(row);
}

function drawTable() {
    const expense = getExpense();
    const amount = getAmount();
    const date = `${monthToCalendar(parseMonth(getDate()))} ${parseDate(getDate())}, ${parseYear(getDate())}`;
    const store = getStore();
    if (expense === '' || amount === `$${NaN}` || getDate() == '') {
        return;
    }
    buildTable(expense, amount, date, store);
    document.querySelector('#expense').value = '';
    document.querySelector('#amount').value = '';
    document.querySelector('#date').value = '';
    document.querySelector('#store').value = '';
}

document.querySelector('#submitbutton').addEventListener('click', drawTable);
document.querySelector('#expensetable').addEventListener('click', deleteRow);