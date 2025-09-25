const quoteNumberDisplay = document.querySelector(".advice-number");
const quoteDisplay = document.querySelector(".advice-quote");

const newQuoteBtn = document.querySelector(".new-quote-btn");

async function getQuote() {
  const quoteApiUrl = "https://api.adviceslip.com/advice";

  newQuoteBtn.disabled = true;
  quoteDisplay.style.opacity = 0;
  quoteNumberDisplay.style.opacity = 0;

  try {
    const response = await fetch(quoteApiUrl, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Failed to fetch advice");
    }

    const result = await response.json();
    const { id, advice } = result.slip;

    setTimeout(() => {
      quoteNumberDisplay.textContent = id;
      quoteDisplay.textContent = advice;

      quoteDisplay.style.opacity = 1;
      quoteNumberDisplay.style.opacity = 1;
    }, 300);
  } catch (error) {
    setTimeout(() => {
      quoteNumberDisplay.textContent = "⚠️";
      quoteDisplay.textContent = "Oops! Something went wrong. Try again.";

      quoteDisplay.style.opacity = 1;
      quoteNumberDisplay.style.opacity = 1;
    }, 300);

    console.error(error);
  } finally {
    newQuoteBtn.disabled = false;
  }
}

newQuoteBtn.addEventListener("click", getQuote);

getQuote();
