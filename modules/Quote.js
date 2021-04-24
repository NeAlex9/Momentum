let blockquote = document.querySelector('blockquote'),
    figcaption = document.querySelector('figcaption'),
    btnChangeQ = document.querySelector('.btnChangeQ');

async function getQuote() {
    try{const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        blockquote.textContent = data.quoteText;
        figcaption.textContent = data.quoteAuthor;
    }
    catch (e){
        blockquote.textContent = 'You were not born a winner, and you were not born a loser. You are what you make yourself be.';
        figcaption.textContent = 'Lou Holtz';
    }
}

document.addEventListener('DOMContentLoaded', getQuote);
btnChangeQ.addEventListener('click', getQuote)