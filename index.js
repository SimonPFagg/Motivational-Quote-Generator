const quote =
    document.getElementById("quote");
const btn = document.getElementById(
    "quote-btn"
);
const bgImage =
    document.getElementsByClassName(
        "bg-image"
    );

btn.addEventListener(
    "click",
    createQuote
);
btn.addEventListener(
    "click",
    changeBackground
);

createQuote();

function createQuote() {
    const randomNumber = Math.floor(
        Math.random() * 1643
    );
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            quote.innerHTML =
                '"' +
                data[randomNumber]
                    .text +
                '"';
        });
}
