// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON data from a local file (or it can be from an API)
    const cardData = [
        {
            "imageSrc": "image1.jpg",
            "title": "Card title 1",
            "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "link": "./applet-1"
        },
        {
            "imageSrc": "image2.jpg",
            "title": "Card title 2",
            "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "link": "./applet-2"
        },
        {
            "imageSrc": "image3.jpg",
            "title": "Card title 3",
            "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "link": "./applet-3"
        },
        {
            "imageSrc": "image4.jpg",
            "title": "Card title 4",
            "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "link": "./applet-4"
        },

        {
            "imageSrc": "image4.jpg",
            "title": "Card title 4",
            "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "link": "./applet-5"
        }
    
    ];

    // Function to generate cards dynamically
    function generateCards(cards) {
        const cardContainer = document.getElementById("card-container");

        cards.forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("col-md-3", "mb-4");  // 4 cards per row

            cardElement.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${card.imageSrc}" class="card-img-top" alt="${card.title}">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.text}</p>
                        <a href="${card.link}" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            `;
            
            cardContainer.appendChild(cardElement);
        });
    }

    // Generate the cards based on the cardData array
    generateCards(cardData);
});