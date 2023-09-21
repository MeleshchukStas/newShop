let openWindow = document.getElementById('open_window');
let cartItems = document.querySelector("#cartItems");

karzina.onclick = function () {

    if (openWindow.style.display === "block") {
        openWindow.style.display = "none";
    } else {
        openWindow.style.display = "block";
    }
};

closeWindow.onclick = function () {
    if (openWindow.style.display === "block") {
        openWindow.style.display = "none";
    } else {
        openWindow.style.display = "block";
    }
};

let urlParams = new URLSearchParams(window.location.search);
let productImage = urlParams.get('img');
let productName = urlParams.get('name');
let productPrice = urlParams.get('price');
let productSizes = urlParams.getAll('size');
let productCup = urlParams.get('cup');
let productColor = urlParams.getAll('color');
let productBraShape = urlParams.get('braShape');
let productMaterial = urlParams.getAll('material');
let productStyle = urlParams.get('style');
let productClasp = urlParams.get('clasp');
let productCountry = urlParams.get('country');
let productComposition = urlParams.getAll('composition');
let productPrint = urlParams.get('print');


let productInfo = document.querySelector("#productInfo");
let productText = document.querySelector(".productText")

let productImageElement = document.createElement("img");
productImageElement.id = "productImage";
productImageElement.src = productImage;
productInfo.appendChild(productImageElement);

let productNameElement = document.createElement("h2");
productNameElement.id = "productName";
productNameElement.textContent = productName;
productText.appendChild(productNameElement);
//
let productSizesList = document.createElement("div");
productSizesList.id = "productSizes";
productText.appendChild(productSizesList);

let sizeString = productSizes.join(",");
let sizeArr = sizeString.split(",");

let sizesHeader = document.createElement("p");
sizesHeader.textContent = "Размеры:";
productSizesList.appendChild(sizesHeader);

let sizeCheckboxContainer = document.createElement("div");
sizeCheckboxContainer.className = "SizesT";
productSizesList.appendChild(sizeCheckboxContainer);



sizeArr.forEach((size) => {
    let sizeCheckbox = document.createElement("input");
    sizeCheckbox.type = "checkbox";
    sizeCheckbox.name = "size";
    sizeCheckbox.value = size;
    sizeCheckbox.id = `size-${size}`;

    let sizeLabel = document.createElement("label");
    sizeLabel.textContent = size;
    sizeLabel.setAttribute("for", `size-${size}`);

    sizeCheckboxContainer.appendChild(sizeCheckbox);
    sizeCheckboxContainer.appendChild(sizeLabel);
});

sizeArr.forEach((size) => {
    let sizeCheckbox = document.getElementById(`size-${size}`);

    sizeCheckbox.addEventListener('change', (event) => {
        let selectedCheckboxId = event.target.id;

        console.log(`Чекбокс с ID ${selectedCheckboxId} был нажат.`);

        let selectedSizes = [];
        sizeArr.forEach((size) => {
            let checkbox = document.getElementById(`size-${size}`);
            if (checkbox.checked) {
                selectedSizes.push(size);
            }
        });
    });
});

// Создайте элементы для цветов
let productColorsList = document.createElement("div");
productColorsList.id = "productColor";
productText.appendChild(productColorsList);

let colorsString = productColor.join(","); // Предположим, что у вас есть массив productColors
let colorsArr = colorsString.split(",");

let colorsHeader = document.createElement("p");
colorsHeader.textContent = "Цвета:";
productColorsList.appendChild(colorsHeader);

let colorCheckboxContainer = document.createElement("div");
colorCheckboxContainer.className = "ColorsT";
productColorsList.appendChild(colorCheckboxContainer);

// Создайте чекбоксы для каждого цвета
colorsArr.forEach((color, index) => {
    let colorCheckbox = document.createElement("input");
    colorCheckbox.type = "checkbox";
    colorCheckbox.name = "color";
    colorCheckbox.value = color;
    colorCheckbox.id = `color-${color}`;

    let colorLabel = document.createElement("label");
    colorLabel.textContent = color;
    colorLabel.setAttribute("for", `color-${color}`);

    colorCheckboxContainer.appendChild(colorCheckbox);
    colorCheckboxContainer.appendChild(colorLabel);
});



/// Назначьте обработчики событий для чекбоксов цветов
// Назначьте обработчики событий для чекбоксов цветов
colorsArr.forEach((color, index) => {
    let colorCheckbox = document.getElementById(`color-${color}`);
    let colorLabel = document.querySelector(`label[for="color-${color}"]`);

    colorCheckbox.addEventListener('change', (event) => {
        let selectedCheckboxId = event.target.id;

        console.log(`Чекбокс с ID ${selectedCheckboxId} был нажат.`);

        let selectedColors = [];
        colorsArr.forEach((color) => {
            let checkbox = document.getElementById(`color-${color}`);
            if (checkbox.checked) {
                selectedColors.push(color);
            }
        });

        // Теперь selectedColors содержит актуальные выбранные цвета
        console.log("Выбранные цвета:", selectedColors);

        // Удалите пробелы из значения класса
        let cleanedColor = color.replace(/\s/g, '');

        // Добавьте или удаляйте классы в зависимости от состояния чекбокса
        if (colorCheckbox.checked) {
            colorLabel.classList.add(`color-${cleanedColor}`);
        } else {
            colorLabel.classList.remove(`color-${cleanedColor}`);
        }
    });
});

let productBraShapeElement = document.createElement("p");
productBraShapeElement.id = "productBraShape";
if (productBraShapeElement !== undefined) {
    productBraShapeElement.style.display = "none"
} else {
    productBraShapeElement.textContent = `Форма бюстгальтера: ${productBraShape}`;
    productText.appendChild(productBraShapeElement);
}

let productMaterialElement = document.createElement("div");
productMaterialElement.id = "productMaterials";
productMaterial.forEach((material) => {
    let materialElem = document.createElement("p");
    materialElem.textContent = `Матеріал ${material}`;
    productMaterialElement.appendChild(materialElem);
});
productText.appendChild(productMaterialElement);

let productStyleElement = document.createElement("p");
productStyleElement.id = "productStyle";
productStyleElement.textContent = `Стиль: ${productStyle}`;
productText.appendChild(productStyleElement);

let productClaspElement = document.createElement("p");
productClaspElement.id = "productClasp";

// Проверяем, определено ли значение productClasp
if (productClasp !== undefined) {
    productClaspElement.style.display = "none"
} else {
    productClaspElement.textContent = `Тип застежки: ${productClasp}`;
    productText.appendChild(productClaspElement);
}


let productCountryElement = document.createElement("p");
productCountryElement.id = "productCountry";
productCountryElement.textContent = `Страна производителя: ${productCountry}`;
productText.appendChild(productCountryElement);

let productCompositionElement = document.createElement("div");
productCompositionElement.id = "productComposition";
productComposition.forEach((composition) => {
    let compositionItem = document.createElement("p");
    compositionItem.textContent = `Состав: ${composition}`;
    productCompositionElement.appendChild(compositionItem);
});
productText.appendChild(productCompositionElement);

let productPrintElement = document.createElement("p");
productPrintElement.id = "productPrint";
productPrintElement.textContent = `Принт: ${productPrint}`;
productText.appendChild(productPrintElement);

let productPriceElement = document.createElement("p");
productPriceElement.id = "productPrice";
productPriceElement.textContent = `Цена: ${productPrice} грн.`;
productText.appendChild(productPriceElement);

productInfo.appendChild(productText);
productText.appendChild(pushKarzina)
///////////////////

// Определяем selectedSizes и selectedColors в глобальной области видимости
let selectedSizes = [];
let selectedColors = [];

//let pushKarzina = document.getElementById("pushKarzina");
let totalAmount = parseFloat(localStorage.getItem("totalAmount")) || 0;

// // Получите значение из локального хранилища (если оно есть) и установите его в элемент #cartItemCount
let cartItemCount = parseInt(localStorage.getItem("cartItemCount")) || 0;
let cartItemCountElement = document.getElementById("cartItemCount");
cartItemCountElement.textContent = cartItemCount.toString();


// Далее, вы можете вывести данные о количестве товаров в корзине где вам необходимо, например:
console.log("Количество товаров в корзине:", cartItemCount);


pushKarzina.onclick = function () {
    let items = document.createElement("li");
    items.classList = 'imemsP';

    let itemsImg = document.createElement("img");
    itemsImg.src = productImage;
    items.appendChild(itemsImg);

    let itemsName = document.createElement("h3");
    itemsName.textContent = productName;
    items.appendChild(itemsName);

    // Получаем выбранные размеры из чекбоксов
    let selectedSizes = [];
    sizeArr.forEach((size) => {
        let checkbox = document.getElementById(`size-${size}`);
        if (checkbox.checked) {
            selectedSizes.push(size);
        }
    });

    // Получаем выбранные цвета из чекбоксов
    let selectedColors = [];
    colorsArr.forEach((color) => {
        let checkbox = document.getElementById(`color-${color}`);
        if (checkbox.checked) {
            selectedColors.push(color);
        }
    });
    // Создаем элементы для размеров и цветов и добавляем их из выбранных
    let itemsSize = document.createElement("p");
    itemsSize.textContent = `Размеры: ${selectedSizes.join(', ')}`;
    items.appendChild(itemsSize);

    let itemsColor = document.createElement("p");
    itemsColor.textContent = `Цвета: ${selectedColors.join(', ')}`;
    items.appendChild(itemsColor);

    let itemsPrice = document.createElement("p");
    itemsPrice.className = "itemsPrice";
    itemsPrice.textContent = `Цена: ${productPrice} грн.`;
    items.appendChild(itemsPrice);

    let count = 1;
    let itemsBox = document.createElement("div");
    itemsBox.className = "itemsBox";
    let countBox = document.createElement("div");
    countBox.className = "countBox";

    let increment = document.createElement("button");
    increment.id = "increment";
    increment.className = "counter-button";
    increment.innerText = "+";

    let decrement = document.createElement("button");
    decrement.id = "decrement";
    decrement.className = "counter-button";
    decrement.innerText = "-";

    let countElement = document.createElement("div");
    countElement.innerText = "1";
    countElement.id = "count";

    increment.addEventListener('click', () => {
        count++;
        countElement.textContent = count;
        totalAmount += parseFloat(productPrice);
        updateTotalAmount();
    });

    decrement.addEventListener('click', () => {
        if (count > 0) {
            count--;
            countElement.textContent = count;
            totalAmount -= parseFloat(productPrice);
            updateTotalAmount();
        }
    });

    let cartItem = {
        image: productImage,
        name: productName,
        sizes: selectedSizes,
        colors: selectedColors,
        price: productPrice,
        quantity: count,
    };

    // Получите текущую корзину из localStorage или создайте новую, если она еще не существует
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Добавьте товар в корзину
    cart.push(cartItem);

    // Сохраните обновленную корзину в localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    cartItemCount++;
    cartItemCountElement.textContent = cartItemCount;
    localStorage.setItem("cartItemCount", cartItemCount.toString());

    countBox.appendChild(increment);
    countBox.appendChild(countElement);
    countBox.appendChild(decrement);

    // Создайте кнопку удаления
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const index = cart.findIndex((item) => {
            return (
                item.image === productImage &&
                item.name === productName &&
                arraysEqual(item.sizes, selectedSizes) && // Создайте функцию для сравнения массивов
                arraysEqual(item.colors, selectedColors)
            );
        });

        // Если элемент найден в массиве корзины, удалите его
        if (index !== -1) {
            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            cartItems.removeChild(itemsBox);

            cartItemCount--;
            cartItemCountElement.textContent = cartItemCount;
            localStorage.setItem("cartItemCount", cartItemCount.toString());
            

            totalAmount -= count * parseFloat(productPrice);

            updateTotalAmount();
        }
    });

    


    countBox.appendChild(deleteButton);

    cartItems.appendChild(itemsBox);
    itemsBox.appendChild(items);
    itemsBox.appendChild(countBox);

    totalAmount += parseFloat(productPrice);
    updateTotalAmount();

};

function updateTotalAmount() {
    // Обновите элемент на странице, отображающий общую сумму
    let totalAmountElement = document.getElementById("totalAmount");
    totalAmountElement.textContent = `Общая сумма: ${totalAmount.toFixed(2)} грн.`;
    localStorage.setItem("totalAmount", totalAmount.toString());

}
totalAmount = parseFloat(localStorage.getItem("totalAmount")) || 0;

function getCartData() {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    return cartData;
}

/////
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

/////
export { getCartData };
