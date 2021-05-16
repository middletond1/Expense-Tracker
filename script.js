function getExpense() {
    const expense = document.querySelector('#expense').value;
    return expense;
}

function getAmount() {
    const amount = parseFloat(document.querySelector('#amount').value).toFixed(2);
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
    return tableData.textContent(`${item}`);
}

function createTableRow() {
    const tableRow = document.createElement('tr');
    return tableRow;
}

function buildTable(expense, amount, date, store) {
    const table = document.querySelector('#expensetable').appendChild(createTableRow());
    table.appendChild(createTableData(expense));
    table.appendChild(createTableData(amount));
    table.appendChild(createTableData(date));
    table.appendChild(createTableData(store));
}

function drawTable() {

}

document.querySelector('#submitbutton').addEventListener('click', );