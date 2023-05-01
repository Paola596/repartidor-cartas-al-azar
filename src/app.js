/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const cards = ["♦", "♥", "♠", "♣"];

  function displayCard() {
    let oneCard = cards[Math.floor(Math.random() * cards.length)];
    let oneNumber = numbers[Math.floor(Math.random() * numbers.length)];
    let showCard = `${oneCard}`;
    let showNumber = `${oneNumber}`;
    document.getElementsByClassName("pinta").innerHTML = showCard;
    document.getElementsByClassName("valor").innerHTML = showNumber;
  }
};
