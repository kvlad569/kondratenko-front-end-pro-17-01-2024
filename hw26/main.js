function toggleSubcategories(category) {
    const subcategories = document.querySelectorAll('.subcategories ul');
    subcategories.forEach(subcategory => {
        subcategory.style.display = 'none';
    });
    document.getElementById(`${category}Subcategories`).style.display = 'block';
}

function showProducts(category, subcategory) {
    const productsElement = document.getElementById('products');
    const productList = products[subcategory];
    productsElement.innerHTML = '<ul>' + productList.map(product => `<li data-product-name="${product.name}" data-product-image="${product.image}" data-product-description="${product.description}">${product.name}</li>`).join('') + '</ul>';

    productsElement.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function() {
            showProductInfo(this.dataset.productName, this.dataset.productImage, this.dataset.productDescription);
        });
    });
}

function showProductInfo(name, image, description) {
    const productInfoElement = document.getElementById('product-info');
    productInfoElement.innerHTML = `
        <h2>${name}</h2>
        <img src="${image}" alt="${name}">
        <p>${description}</p>
        <button id="buyButton">Купити</button>
    `;

    document.getElementById('buyButton').addEventListener('click', buyProduct);
}

function buyProduct() {
    alert('Товар куплен');
    const subcategories = document.querySelectorAll('.subcategories ul');
    subcategories.forEach(subcategory => {
        subcategory.style.display = 'none';
    });
    const productsElement = document.getElementById('products');
    productsElement.innerHTML = '';
    const productInfoElement = document.getElementById('product-info');
    productInfoElement.innerHTML = '';
}

const products = {
    menPerfume: [
        { name: 'Calvin Klein Euphoria Men', 
        image: 'images/perfume/men perfume/tovar1/1.jpg', 
        description: 'Сучасні і сильні чоловіки обирають екзотичну провокацію.' },

        { name: 'Lacoste Essential', 
        image: 'images/perfume/men perfume/tovar2/1.jpg', 
        description: 'Тип аромату: деревинні, фужерні. Початкова нота: Бергамот, Виноград, Водяні ноти, Лимон, Листя томатів, Мандарин, Фрукти' },

        { name: 'Giorgio Armani Acqua di Gio Profondo',
         image: 'images/perfume/men perfume/tovar3/1.png', 
         description: 'Якщо ваш обранець віддає перевагу фужерним ароматам, насиченими східно-деревними переливами' }
    ],
    womenPerfume: [{ name: 'Товар 1', 
    image: 'images/perfume/men perfume/tovar1/1.jpg', 
    description: 'Описание товара 1' }],
    
    unisexPerfume: [{ name: 'Товар 7', image: 'product7.jpg', description: 'Описание товара 7' }],
    brows: [{ name: 'Товар 10', image: 'product10.jpg', description: 'Описание товара 10' }],
    lips: [{ name: 'Товар 13', image: 'product13.jpg', description: 'Описание товара 13' }],
    eyes: [{ name: 'Товар 16', image: 'product16.jpg', description: 'Описание товара 16' }],
    styling: [{ name: 'Товар 19', image: 'product19.jpg', description: 'Описание товара 19' }],
    dye: [{ name: 'Товар 22', image: 'product22.jpg', description: 'Описание товара 22' }],
    shampoo: [{ name: 'Товар 25', image: 'product25.jpg', description: 'Описание товара 25' }],
    faceCream: [{ name: 'Товар 28', image: 'product28.jpg', description: 'Описание товара 28' }],
    maskFace: [{ name: 'Товар 31', image: 'product31.jpg', description: 'Описание товара 31' }],
    facialSerum: [{ name: 'Товар 34', image: 'product34.jpg', description: 'Описание товара 34' }]
};