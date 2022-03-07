'use strict';
document.addEventListener("DOMContentLoaded", function(event){
    getQuote('qotd');
});

function getQuote(quote) {
    fetch('https://favqs.com/api/' + quote).then(response => response.json()).then(point =>{
console.log(point);
    document.querySelector(".text").innerText = `"${point.quote.body}"`;
    document.querySelector(".author").innerText = `— ${point.quote.author}`;
})};