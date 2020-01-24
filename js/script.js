/*
    Matt Felton - 100766047

    This program requires the users input for the principal amount, interest rate, and 
    amount of years occuring. Once the information is inputted, the program will output the
    result to the page for the users viewing. I also added an additional if else statement to determine if the fields are filled out and if they are not it wont submit and will send the user an alert.
*/

document.getElementById('generate').onclick = function () {

    // collects the value of the inputted dollar amount
    let principalAmount = document.getElementById('principal').value;

    // collects the user inputted interest rate
    let interest = document.getElementById('interestRate').value;

    // collects the user inputted years
    let years = document.getElementById('yearCount').value;

    // calculates the principal amount * the interest rate and years
    let result = principalAmount * Math.pow((1 + interest / 100), years);

    // takes the result and rounds it to the next whole number
    let roundedResult = Math.round(result);

    // validates that the required form fields are filled out and sends an alert if not
    if (principalAmount, interest, years == "") {
        alert('Please fill out the required forms before submitting.');
        return false;
    } else {

        // if form is filled out it outputs the required message and symbols along with the result to the page.
        document.getElementById('output').innerHTML = ' A starting principle of ' + '$' + principalAmount + ' will grow to ' + '$' + roundedResult + ' after ' + years + ' year(s) ' + ' with an interest rate of ' + interest + '%.';
    }
};