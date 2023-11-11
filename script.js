function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to GWU Marketplace!";
    alert(welcomeMessage);
}

document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("home-button");
    if (homeButton) {
        homeButton.addEventListener("click", displayWelcomeMessage);
    }

    const homeLink = document.querySelector('#home-link');
    const sellLink = document.querySelector('#sell-link');
    const buyLink = document.querySelector('#buy-link');
    const contactLink = document.querySelector('#contact-link');

    homeLink.addEventListener('click', () => {
        window.location.href = 'gwuindex.html';
    });

    sellLink.addEventListener('click', () => {
        window.location.href = 'sellgwu.html';
    });

    buyLink.addEventListener('click', () => {
        window.location.href = 'buygwu.html';
    });

    contactLink.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });

    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;

            if (name === '' || email === '') {
                event.preventDefault();
                alert('Name and email are required fields.');
            }
        });
    }

    const sellForm = document.querySelector('#sell-form');
    if (sellForm) {
        sellForm.addEventListener('submit', (event) => {
            const itemName = document.querySelector('#item_name').value;
            const description = document.querySelector('#description').value;
            const price = document.querySelector('#price').value;
            const productType = document.querySelector('#product_type').value;

            if (itemName === '' || description === '' || price === '' || productType === 'none') {
                event.preventDefault(); 
                alert('All fields in the Sell form are required.');
            }
        });
    }
});
