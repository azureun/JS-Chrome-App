// #06 Quotes & Backgroud
const quotes = [
    {
        quote:"Venture outside your comfort zone. The rewards are worth it.",
        author:"Rapunzel",
    },
    {
        quote:"Anyone can be anything.",
        author:"Zootopia",
    },
    {
        quote:"When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
        author:"Walt Disney",
    },
    {
        quote:"To love someone, you have to love yourself first.",
        author:"Beauty and the Beast",
    },
    {
        quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author:"Thomas Edison",
    },
    {
        quote:"Everything negative - pressure, challenges - is all an opportunity for me to rise.",
        author:"Kobe Bryant",
    },
    {
        quote:"What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.",
        author:"Helen Keller",
    },
    {
        quote:"“I love you” begins by I, but it ends up by you.",
        author:"Charles de Leusse",
    },
    {
        quote:"Try not to become a man of success but rather try to become a man of value.",
        author:"Albert Einstein",
    },
    {
        quote:"Don't be afraid to give up the good to go for the great",
        author:"John D. Rockefeller",
    },
       
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#author span:first-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quotes.innerText = todaysQuote.quote;
quotes.innerText = todaysQuote.author;
