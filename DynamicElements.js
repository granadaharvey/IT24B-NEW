// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON data from a local file (or it can be from an API)
    const cardData = [
        {
            "imageSrc": "image1.jpg",
            "title": "Applet 1 - Basic Events",
            "text": "This application contains the basic implementation of DDM events",
            "link": "./applet-1"
        },
    ];

 
    function generateCards(cards) {
        const cardContainer = document.getElementById("card-container");

        cards.forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("col-md-3", "mb-4");  

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

   
    generateCards(cardData);
});