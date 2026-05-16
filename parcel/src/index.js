import './styles.css';

const API_URL = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";
const $app = document.getElementById('app');

const main = async () => {
    const response = await fetch(API_URL);
    const products = await response.json();

    const view = `
    <div class="Items">
        ${products.map(product => {
            return `
                <div class="Card">
                    <img src="${product.images[0]}" alt="${product.title}">
                    <h2>
                        <a href="#${product.id}">${product.title}</a>
                        <span>$${product.price}</span>
                    </h2>
                </div>
            `
        }).join('')}
    </div>`;

    $app.innerHTML = view;
}

main();