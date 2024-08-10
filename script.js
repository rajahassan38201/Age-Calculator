document.getElementById('date-input').max = new Date().toISOString().split("T")[0];

function calculateAge() {
    const dateInput = document.getElementById('date-input').value;
    const birthDate = new Date(dateInput);
    const today = new Date();

    if (!dateInput) {
        alert("Please select a date.");
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        ageMonths--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        ageDays += prevMonth.getDate();
    }

    document.getElementById('years').textContent = ageYears;
    document.getElementById('months').textContent = ageMonths;
    document.getElementById('days').textContent = ageDays;
}


document.getElementById('calc-age-btn').addEventListener('click', calculateAge);