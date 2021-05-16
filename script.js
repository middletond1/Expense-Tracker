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
    const month = parseInt(date.substr(5, 2));
    const months = [
        '',
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
    console.log(year);
    return year;
}

function getStore() {
    const store = document.querySelector('#store').value;
    return store;
}

document.querySelector('#submitbutton').addEventListener('click', );