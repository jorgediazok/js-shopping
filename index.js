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

carts.forEach((cart) => {
  cart.addEventListener('click', () => {
    cartNumbers();
  });
});

function cartNumbers() {
  let productNumbers = parseInt(localStorage.getItem('cartNumbers'));
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
}
