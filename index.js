const myButton = document.getElementById("quote-btn");
const myQuote = document.getElementById("quote");
const myBackground = document.getElementsByClassName("bg-image");

document.getElementById("quote-btn").addEventListener("click", buttonQuote);
document.getElementById("quote-btn").addEventListener("click", changeBackground);

// Function for Random Number
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 16)
    return randomNumber;
}

// Fetch quote
function buttonQuote() {

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let randomQuote = data[getRandomNumber()].text;
            myQuote.innerHTML = randomQuote;
        });

}