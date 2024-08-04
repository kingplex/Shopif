document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is the first product.',
            price: '$10.00',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is the second product.',
            price: '$20.00',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is the third product.',
            price: '$30.00',
            imageUrl: 'https://via.placeholder.com/150'
        },
        // Add more products as needed
    ];

    const productContainer = document.querySelector('.product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src="\${product.imageUrl}" alt="\${product.name}">
            <h3>\${product.name}</h3>
            <p>\${product.description}</p>
            <p><strong>\${product.price}</strong></p>
            <button>Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message!');
    });
});
