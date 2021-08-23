var quotes = [
    {quote:'“Be yourself; everyone else is already taken.”',
    author: '― Oscar Wilde'
    },

    {quote:'“A room without books is like a body without a soul.”',
    author: '― Marcus Tullius Cicero'
    },

    {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: '― Albert Einstein'
    },

    {quote:'“Be the change that you wish to see in the world.”',
    author: '― Mahatma Gandhi'
    },

    {quote:"“If you tell the truth, you don't have to remember anything.”",
    author: '― Mark Twain'
    },
    
]



function addQuote(){
var randomNumber = Math.floor(Math.random()*quotes.length);
var QUOTE = document.getElementById("quote");
QUOTE.innerHTML = quotes[randomNumber].quote;

var AUTHOR = document.getElementById("author");
AUTHOR.innerHTML = quotes[randomNumber].author;
}