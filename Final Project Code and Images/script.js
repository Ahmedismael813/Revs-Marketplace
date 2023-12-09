function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to GWU Marketplace!";
    alert(welcomeMessage);
}

function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    fetch('validate-login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('error-message').innerHTML = '';
            window.location.href = 'gwuindex.html';
        } else {
            document.getElementById('error-message').innerHTML = 'Invalid email or password.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    return false;
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

    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', validateForm);
    }

    const filterButton = document.getElementById('filter-button');
    const categorySelect = document.getElementById('category');

    filterButton.addEventListener('click', function () {
        const selectedCategory = categorySelect.value;

        const items = document.querySelectorAll('.item-card');
        items.forEach(item => item.style.display = 'block');

        if (selectedCategory !== 'all') {
            items.forEach(item => {
                if (!item.classList.contains(selectedCategory)) {
                    item.style.display = 'none';
                }
            });
        }
    });

    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();

        const items = document.querySelectorAll('.item-card');
        items.forEach(item => item.style.display = 'block');

        if (searchTerm !== '') {
            items.forEach(item => {
                const itemText = item.innerText.toLowerCase();
                if (!itemText.includes(searchTerm)) {
                    item.style.display = 'none';
                }
            });
        }
    });
});
