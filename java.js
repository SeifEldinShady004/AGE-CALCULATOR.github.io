document.addEventListener("DOMContentLoaded", function () {
    // Populate date select element
    const dateSelect = document.getElementById('date');
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        dateSelect.appendChild(option);
    }
});

function calculateAge() {
    const date = parseInt(document.getElementById('date').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const today = new Date();
    let age = today.getFullYear() - year;
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();

    if (month > currentMonth || (month === currentMonth && date > currentDate)) {
        age--;
    }

    document.getElementById('ageResult').textContent = age;
}
