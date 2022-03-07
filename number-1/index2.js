"use strict";

let btn = document.querySelector('.btn');

btn.addEventListener("click", (event) =>{
    event.preventDefault();
    let point1 = document.querySelector('.point-1').value;
    let point2 = document.querySelector('.point-2').value;
    let point3 = document.querySelector('.point-3').value;
    let point4 = document.querySelector('.point-4').value;
    let point5 = document.querySelector('.point-5').value;

    let points = [
        {namber: point1},
        {namber: point2},
        {namber: point3},
        {namber: point4},
        {namber: point5}] 
    
    localStorage.setItem('points',JSON.stringify(points));

});