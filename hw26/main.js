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

    brows: [
        { name: 'Rimmel Brow This Way Professional Eyebrow Pencil',
         image: 'images/makeup/brows/tovar1/1.jpg', 
         description: 'Виразні та густі брови - актуальний тренд, який ось уже декілька сезонів не втрачає своєї популярності. Але домогтися бажаної форми не завжди легко, тому краще мати під рукою спеціальні декоративні засоби.' },

        { name: 'L`Oréal Paris Infallible 24H Brows', 
        image: 'images/makeup/brows/tovar2/1.jpg', 
        description: 'Брови – сьогодні їм присвячується максимум уваги візажистів, стилістів і brow-майстрів. Не дивно, адже ця частина обличчя дуже виразна і завжди грає важливу роль у цілісному образі та зовнішньому вигляді.' },

        { name: 'L`Oréal Paris Unbelieva Brow Gel', 
        image: 'images/makeup/eyes/tovar3/1.jpg', 
        description: 'Революційний гель для брів від команди експертів відомого французького бренда L`Oréal Paris Unbelieva Brow стане чудовим помічником для чарівної дівчини в процесі оформлення макіяжу вищезгаданої зони. Він вирізняється насиченою консистенцією, тому рівномірно розподіляється по поверхні волосків і добре піддається розтушовуванню.' }
    ],

    lips: [
        { name: 'Bourjois Rouge Edition Velvet Lipstick', 
        image: 'images/makeup/lips/tovar1/1.jpg', 
        description: 'З рідкою помадою Rouge Edition Velvet Lipstick ваші вуста нагадуватимуть соковиті стиглі ягідки, які так і хочеться поцілувати. Цілуйтеся на здоровя, адже завдяки своїй унікальній формулі цей засіб тримається на губах дуже довго.' },

        { name: 'Max Factor Colour Elixir Moisture Lipstick', 
        image: 'images/makeup/lips/tovar2/1.jpg', 
        description: 'Чуттєві губи, які так і манять відчути їхній смак, поцілунок, від якого точно кине в жар. Неперевершений ефект легендарної губної помади Colour Elixir Moisture Lipstick американського бренда Max Factor можна порівняти хіба що з лихоманкою. Зволожувальна формула, 29 ефектних відтінків, неперевершена стійкість – це секрет ідеального макіяжу губ, від яких неможливо буде відірвати погляду!' },

        { name: 'Lancome LAbsolu Rouge Cream', 
        image: 'images/makeup/lips/tovar3/1.jpg', 
        description: 'Класифікація: елітна. Країна ТМ: Франція. Зроблено в: Франція' }
    ],

    eyes: [
        { name: 'Max Factor 2000 Calorie Dramatic Volume', 
        image: 'images/makeup/eyes/tovar1/1.jpg', 
        description: 'Хіт від Max Factor! Туш, що робить погляд влучнішим за стріли Купідона! З нею очі придбають ангельську красу, стають чуттєвими і чарівними.' },

        { name: 'Bourjois Little Round Pot Individual Eyeshadow', 
        image: 'images/makeup/eyes/tovar2/1.jpg', 
        description: 'Сліпучий погляд – не лише розкішні вії, це ще й правильно підібрані тіні, що відображають його глибину, унікальність і безмежність душі... Little Round Pot Individual Eyeshadow від французького бренда Bourjois допоможуть вам створити саме такий ефект буквально за допомогою декількох простих рухів.' },

        { name: 'MAC Stack Mega Mascara Brush', 
        image: 'images/makeup/eyes/tovar3/1.jpg', 
        description: 'Якщо ви бажаєте, щоб ваш погляд став по-справжньому заворожуючим і магнетичним, туш для вій від бренда MAC — найкращий вибір для цього. За декілька обережних рухів вона гарантує максимальну довжину і неймовірний обєм, після чого вашим віям заздритиме весь світ!' }
    ],

    styling: [
        { name: 'Матовий сольовий спрей для волосся', 
        image: 'images/hair/styling/tovar1/1.jpg', 
        description: 'Чоловічий стайлінг - це завжди максимум зусиль і ретельне опрацювання кожного пасма. Чи ні? З унікальним матовим сольовим спреєм спеціалізованого men-бренда Perfomen фіксація волосся дорівнює мінімальним витратам часу і гарному результату на весь день. Засіб не тільки текстурує волоски, але і піклується про їх стан.' },

        { name: 'Матова паста для укладання волосся', 
        image: 'images/hair/styling/tovar2/1.jpg', 
        description: 'Ви звикли мати бездоганний вигляд? Зверніть увагу на матову пасту від QM, що допомагає приборкати навіть дуже неслухняні пасма, уклавши їх в елегантну зачіску.' },

        { name: 'Лак для тонкого волосся супер-сильної фіксації', 
        image: 'images/hair/styling/tovar3/1.jpg', 
        description: 'Ваше волосся недостатньо обємне? Воно тонке, ослаблене та неслухняне? Це не біда. Розкішний обєм і густоту вашим локонам подарує лак суперсильної фіксації від Wella. З ним ви легко зробите бездоганну зачіску, яка збереже ідеальний вигляд протягом усього дня, незважаючи на вітер та підвищену вологість.' }
    ],

    dye: [
        { name: 'Стійка фарба для волосся без аміаку з олією-активатором', 
        image: 'images/hair/dye/tovar1/1.jpg', 
        description: 'Стійка фарба для волосся з олією Syoss Oleo Intense – фарба для волосся без аміаку для здорового на вигляд волосся. Безамічна фарба для волосся розроблена, щоб дбайливо ставитися до волосся, забезпечуючи 100% зафарбовування сивини.' },

        { name: 'Стійка крем-фарба для волоссяр 22', 
        image: 'images/hair/dye/tovar2/1.jpg', 
        description: 'Стійка крем-фарба для волосся Syoss Permanent Coloration здатна забезпечити яскравий колір, ідеально приховати сивину та захистити волосся від пошкодження.' },

        { name: 'Тонувальний спрей для маскування відрослих коренів волосся та сивини', 
        image: 'images/hair/dye/tovar3/1.jpg', 
        description: 'Syoss — це всесвітньо відомий німецький бренд, який вже понад 10 років дивує споживачів у всьому світі якісними і доступними косметичними засобами, що гарантують чудовий догляд волоссю. Серед найширшого асортименту кожен зможе знайти для себе необхідний продукт, а регулярна поява яскравих і неординарних новинок задовольнить вимоги навіть найвибагливішого покупця.' }
    ],

    shampoo: [
        { name: 'Шампунь для інтенсивного відновлення пошкодженого', 
        image: 'images/hair/shampoo/tovar1/1.jpg', 
        description: 'Шампунь для інтенсивного відновлення пошкодженого волосся від LOreal Professionnel забезпечить помітну трансформацію пасм і відчуття легкості. Він створений на основі професійної формули з екстрактом кіноа і протеїнами пшениці.' },

        { name: 'Шампунь для фарбованого волосся', 
        image: 'images/hair/shampoo/tovar2/1.jpg', 
        description: 'Якщо ви часто фарбуєте волосся, тоді вам напевно відомо, наскільки важливо підтримувати їх у нормальному, здоровому стані, щоб при цьому не втрачалася насиченість фарби.' },

        { name: 'Шампунь для надання обєму тонкому волоссю', 
        image: 'images/hair/shampoo/tovar3/1.jpg', 
        description: 'Особливості шампуню High Amplify — це дбайливий догляд і миттєве надання об’єму тонкому волоссю. Легка формула засобу містить протеїни пшениці, пантенол і катіонові полімери.' }
    ],

    faceCream: [
        { name: 'Крем для усіх типів шкіри обличчя', 
        image: 'images/face/Face cream/tovar1/1.jpg', 
        description: 'Майстри молодого українського бренда Hillary створюють косметику, використовуючи для цього високоякісні натуральні компоненти, грамотно комбінуючи їх у найкращих синергетичних звязках. У роботі вони консультуються з досвідченими дерматологами і алергологами.' },

        { name: 'Лосьйон після засмаги', 
        image: 'images/face/Face cream/tovar1/1.jpg', 
        description: 'Отримайте місяць бездоганної засмаги, якій позаздрять навіть мешканці теплих країн! Забезпечити ідеально рівний тон, подарувавши свіжість і зволоження, під силу приголомшливому лосьйону елітного бренда Lancaster.' },

        { name: 'Денний антивіковий крем для обличчя з ефектом ліфтингу', 
        image: 'images/face/Face cream/tovar1/1.jpg', 
        description: 'Своєчасний і якісний догляд за шкірою обличчя дає можливість запобігти появі перших ознак старіння на довгий період часу. Знаменитим французьким брендом Lancome розроблений новий крем Rénergie Multi-Lift Cream SPF15 призначений для догляду за обличчям у віці після 35 років. ' }
    ],

    maskFace: [
        { name: 'Маска для обличчя оновлювальна з рожевою глиною й екстрактом граната', 
        image: 'images/face/mask  face/tovar1/1.jpg', 
        description: 'Косметика Relance – це турбота про шкіру з першого дня застосування. Якщо вам необхідно повернути її гладкість і шовковистість, усунути запалення та звузити пори – довіртеся дії оновлювальної маски Pink Clay + Pomegranate Extract. Формула засобу основана на двох ефективних компонентах – рожевій глині та натуральному екстракті гранату.' },

        { name: 'Очищувальна і відбілювальна маска з оксидом цинку і вітамінами РР, В1, Е, А, В7', 
        image: 'images/face/mask  face/tovar2/1.jpg', 
        description: 'Очисна і відбілювальна маска від українського бренда Sane забезпечить ефективний догляд за шкірою, вирівнявши її тон, позбавивши від почервоніння і висипів. Активна формула засобу збагачена вітамінним комплексом, який забезпечує протизапальну, розгладжувальну, тонізувальну і оздоровчу дії, поліпшуючи стан епідермісу.' },

        { name: 'Зволожувальна тканинна маска для сяйва шкіри обличчя', 
        image: 'images/face/mask  face/tovar3/1.jpg', 
        description: 'Перед важливою подією, романтичним побаченням чи особливою зустріччю жінка прагне виглядати бездоганно. Бюті-процедура із застосуванням косметичної маски — стандартне і розумне рішення. Особливо, якщо для відновлення сяйва та гладкості шкіри обрана маска з колекції від бренда Biotherm — Aqua Glow Flash Mask.' }
    ],

    facialSerum: [
        { name: 'Відновлювальна сироватка проти зморщок', 
        image: 'images/face/face serum/tovar1/1.jpg', 
        description: 'Відновлювальна сироватка розроблена фахівцями французького бренда Lancaster спеціально для догляду за зрілою шкірою. Це ефективний засіб проти зморшок, оскільки він насичений антивіковими компонентами. Так, сквалан у складі продукту підтримує еластичність шкіри та запобігає її вялість. Вітамін Е надає розгладжувальну дію.' },

        { name: 'Подвійна сироватка', 
        image: 'images/face/face serum/tovar2/1.jpg', 
        description: 'Щодня шкіра обличчя зазнає несприятливого впливу зовнішніх факторів, що не кращим чином позначається на її стані і зовнішньому вигляді. Щоб зберегти її красу, варто регулярно використовувати засоби для догляду. Один з них — подвійна сироватка елітного французького бренда Clarins.' },

        { name: 'Ліфтингова сиворотка проти зморшок', 
        image: 'images/face/face serum/tovar3/1.jpg', 
        description: 'До складу сироватки Perfectionist [CP +] від Estee Lauder увійшли ексклюзивні нові технології, в результаті яких відновлюється і зміцнюється захисний барєр, розгладжуються зморшки і нерівності, шкіра стає свіжою та здоровою.' }
    ]
};