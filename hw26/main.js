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
    womenPerfume: [
        { name: 'Calvin Klein CK IN2U Her', 
        image: 'images/perfume/women perfume/tovar1/1.jpg', 
        description: 'Початкова нота: Бергамот, Грейпфрут, Листя чорної смородини. Яскравий CK IN2U Her - для легкої, спокусливої, квітучої жінки.' },

        { name: 'Giorgio Armani My Way Floral', 
        image: 'images/perfume/women perfume/tovar2/1.jpg', 
        description: 'Початкова нота: Гіркий апельсин, Зелений мандарин, Квітка апельсина. Унікальний східно-квітковий аромат, створений спеціально для творчих, цілеспрямованих та впевнених у собі дівчат, які точно знають, чого хочуть від життя.' },

        { name: 'Valentino Donna Born In Roma', 
        image: 'images/perfume/women perfume/tovar3/1.jpg', 
        description: 'Початкова нота: Бергамот, Чорна смородина. Східно-деревні аромати з домішками квіткових нот – це вишукане поєднання, виткане не тільки з професіоналізму його творців, але й відгомонів найвищих почуттів: кохання, ніжності, трепету .' }
],
    unisexPerfume: [
        { name: 'Pascal Morabito Noir', 
        image: 'images/perfume/unisex perfume/tovar1/1.jpg', 
        description: 'Вишуканий аромат Noir уособлює уявлення французьких парфумерних майстрів бренда Pascal Morabito про загадкову східну ніч.' },

        { name: 'Les Nereides Rue Paradis', 
        image: 'images/perfume/unisex perfume/tovar2/1.jpg', 
        description: 'ип аромату: квіткові, східні. Початкова нота: Зірчастий аніс. Нота серця: Мімоза. Кінцева нота: Сандал' },

        { name: 'ТоваGiorgio Armani Si Passione', 
        image: 'images/perfume/unisex perfume/tovar3/1.jpg', 
        description: 'Для найжіночніших і прекрасних, які вже встигли оцінити і полюбити божественний аромат Giorgio Armani Si, вийшла ще більш пристрасніша його версія – парфумована вода Si Passione.' }
    ],

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