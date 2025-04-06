document.getElementById('calculate').addEventListener('click', function() {
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) {
        document.getElementById('result').innerText = "Please enter a valid birthdate.";
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();
    
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
});
