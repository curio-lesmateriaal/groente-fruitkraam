let products = [
  { emoji: '🍎', name: 'Apple', price: 1.20, stock: 30, amountClicked: 0 },
  { emoji: '🍌', name: 'Banana', price: 0.80, stock: 50, amountClicked: 0 },
  { emoji: '🍇', name: 'Grapes', price: 2.50, stock: 25, amountClicked: 0 },
  { emoji: '🫛', name: 'Peas', price: 1.00, stock: 40, amountClicked: 0 },
  { emoji: '🫑', name: 'Bell Pepper', price: 1.50, stock: 35, amountClicked: 0 },
  { emoji: '🍍', name: 'Pineapple', price: 3.00, stock: 15, amountClicked: 0 },
  { emoji: '🍐', name: 'Pear', price: 1.10, stock: 20, amountClicked: 0 },
  { emoji: '🥬', name: 'Lettuce', price: 1.30, stock: 18, amountClicked: 0 },
  { emoji: '🍊', name: 'Orange', price: 1.00, stock: 28, amountClicked: 0 }
];


products.forEach(product => {
    let item = document.createElement('div');
    item.className = "flex items-center flex-col justify-center text-6xl border rounded-lg p-4 bg-green-200 cursor-pointer";
    item.className = "flex items-center flex-col justify-center text-6xl border rounded-lg p-4 bg-green-200 cursor-pointer";
    item.textContent = product.emoji;

    let counter = document.createElement('div');
    counter.className = "text-sm text-center mt-2";
    // how to make the html work
    counter.innerHTML = `Op voorraad: <br><span class="product-stock"> ${product.stock} </span>`;

    item.addEventListener('click', () => {
        product.stock++;
         counter.innerHTML = `Op voorraad: <br><span class="product-stock"> ${product.stock} </span>`;
    });

    document.getElementById('product-stand').appendChild(item);
    item.appendChild(counter);
});
