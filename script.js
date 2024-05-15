// Example portfolio items (you can replace these with your own)
const portfolioItems = [
  { name: "Project 1", image: "bus.jpeg", description: "Bus ticket booking" },
  { name: "Project 2", image: "Event.png", description: "Online Event registration" },
  
];

// Function to generate portfolio items
function generatePortfolioItems() {
  const portfolioContainer = document.querySelector(".portfolio-items");

  portfolioItems.forEach(item => {
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add("portfolio-item");

    const image = document.createElement("img");
    
    image.alt = item.name;

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    portfolioItem.appendChild(image);
    portfolioItem.appendChild(title);
    portfolioItem.appendChild(description);

    portfolioContainer.appendChild(portfolioItem);
  });
}

// Generate portfolio items when the page loads
window.addEventListener("load", generatePortfolioItems);
