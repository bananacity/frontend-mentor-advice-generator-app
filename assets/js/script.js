const quoteNumberDisplay = document.querySelector(".advice-number");
const quoteDisplay = document.querySelector(".advice-quote");

const newQuoteBtn = document.querySelector(".new-quote-btn");

async function getQuote() {
  const quoteApiUrl = "https://api.adviceslip.com/advice";

  const response = await fetch(quoteApiUrl);

  const result = await response.json();

  const data = result.slip;

  const quoteNumber = data.id;
  const quoteText = data.advice;

  quoteNumberDisplay.textContent = quoteNumber;
  quoteDisplay.textContent = quoteText;
}

newQuoteBtn.addEventListener("click", getQuote);

getQuote();
