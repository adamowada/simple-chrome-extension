"use strict";

document.addEventListener('DOMContentLoaded', function() {
  const quoteElement = document.getElementById('quote');
  const quotes = [
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it."
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  quoteElement.textContent = getRandomQuote();
});
