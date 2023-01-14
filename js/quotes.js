// randomness

const quotes = [
    {
        quote: '문장문장문장 1',
        author: '글쓴이 1'
    },
    {
        quote: '문장문장문장 2',
        author: '글쓴이 2'
    },
    {
        quote: '문장문장문장 3',
        author: '글쓴이 3'
    },
    {
        quote: '문장문장문장 4',
        author: '글쓴이 4'
    },
    {
        quote: '문장문장문장 5',
        author: '글쓴이 5'
    },
    {
        quote: '문장문장문장 6',
        author: '글쓴이 6'
    },
    {
        quote: '문장문장문장 7',
        author: '글쓴이 7'
    },
    {
        quote: '문장문장문장 8',
        author: '글쓴이 8'
    },
    {
        quote: '문장문장문장 9',
        author: '글쓴이 9'
    },
    {
        quote: '문장문장문장 10',
        author: '글쓴이 10'
    },
]

const quote = document.querySelector('#quote > span:first-child');
const author = document.querySelector('#quote > span:last-child');

// Math module
// Math.random(); //0 ~ 1 사이의 랜덤한 숫자를 제공한다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author;
