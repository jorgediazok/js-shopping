let carts = document.querySelectorAll('.add-cart');
let products = [
  {
    name: 'Dress 1',
    tag: 'Dress 1',
    price: 15,
    inCart: 0,
  },
  {
    name: 'Dress 2',
    tag: 'Dress 2',
    price: 20,
    inCart: 0,
  },
  {
    name: 'Dress 3',
    tag: 'Dress 3',
    price: 25,
    inCart: 0,
  },
  {
    name: 'Dress 4',
    tag: 'Dress 4',
    price: 35,
    inCart: 0,
  },
  {
    name: 'Dress 5',
    tag: 'Dress 5',
    price: 55,
    inCart: 0,
  },
  {
    name: 'Dress 6',
    tag: 'Dress 6',
    price: 65,
    inCart: 0,
  },
  {
    name: 'Dress 7',
    tag: 'Dress 7',
    price: 85,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = parseInt(localStorage.getItem('cartNumbers'));
  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = parseInt(localStorage.getItem('cartNumbers'));
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  product.inCart = 1;
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  if (cartCost === null) {
    localStorage.setItem('totalCost', product.price);
  } else {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
  }
}

onLoadCartNumbers();
