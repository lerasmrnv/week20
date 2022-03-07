'use strict';

document.addEventListener("DOMContentLoaded", function(event){
    let heroes = JSON.parse(json);

    let heroesContent = "";
    for(let hero of heroes) {
        heroesContent += `<div class="hero-item">
        <h2 class="hero-title">${hero.name}</h2>
        <p>Вселенная: ${hero.universe}</p>
        <p>Альтер эго: ${hero.alterEgo}</p>
        <p>Род деятельности: ${hero.typeOfActivity}</p>
        <p>Друзья: ${hero.friends}</p>
        <p>Суперсилы: ${hero.superpowers}</p>
        <img class="hero-image" src="${hero.image}" alt"${hero.name}">
        <p class="more-detailed">Подробнее: ${hero.moreDetailed}</p>
        <div class="points">
        <p>Ваша оценка</p>
        <select class="point-${hero.point}">
        <option value="1">1 балл</option>
        <option value="2">2 балл</option>
        <option value="3">3 балл</option>
        <option value="4">4 балл</option>
        <option value="5">5 балл</option>
        </select>
            </div>
        </div>`;
    }
    document.getElementById("gallary").innerHTML = heroesContent;

});