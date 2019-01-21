let day = new Date().getDay();
let year = new Date().getFullYear();
let quote = document.querySelector("p");
let footer = document.querySelector("footer");

switch(day) {
    case 0:
    quote.textContent = "Sunday and Sofa both start with the letter \"S\". Is that a coincidence? I don't think so...";
    break;
    case 1:
    quote.textContent = "The only thing I appreciate about Mondays is the first 5 letters of the word!";
    break;
    case 2:
    quote.textContent = "After Tuesday, even the calendar goes W T F";
    break;
    case 3:
    quote.textContent = "My Wednesdays are faulty, they feel just like Mondays";
    break;
    case 4:
    quote.textContent = "It's thirsty Thursday, where our bitches at?"
    break;
    case 5:
    quote.textContent = "Friday the 13th is still better than Monday the whatever.";
    break;
    case 6:
    quote.textContent = "Saturday is like your best friend. Sunday is pretty much like your mother. Monday is definitely your boss!";
    break;
};

footer.innerHTML = `Antonio Monda, <em>JS Switches</em> - ${year}`;