const calendar = document.getElementById('calendar').getElementsByTagName('tbody')[0];
const monthYear = document.getElementById('monthYear');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');
const prevYear = document.getElementById('prevYear');
const nextYear = document.getElementById('nextYear');

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateCalendar() {
    calendar.innerHTML = '';
    monthYear.innerHTML = `${allMonths[currentMonth]} ${currentYear}`;

    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let row = calendar.insertRow();
    for (let i = 0; i < firstDay; i++) {
        row.insertCell();
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if (row.cells.length === 7) {
            row = calendar.insertRow();
        }
        let cell = row.insertCell();
        cell.innerHTML = day;

        if (currentMonth === today.getMonth() && currentYear === today.getFullYear() && day === today.getDate()) {
            cell.classList.add('current-day');
        }
    }
}

prevMonth.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
});

nextMonth.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
});

prevYear.addEventListener('click', () => {
    currentYear--;
    updateCalendar();
});

nextYear.addEventListener('click', () => {
    currentYear++;
    updateCalendar();
});

updateCalendar();