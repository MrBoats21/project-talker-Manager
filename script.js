const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getIdFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addProduct = async () => {
  const items = await fetchProducts('computador');
  items.forEach(({ id, title, thumbnail }) => {
    const item = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    document.querySelector('.items').appendChild(createProductItemElement(item));
  });
};

const addToCart = async (event) => {
  const target = event.target.parentNode;
  const id = getIdFromProductItem(target);
  const item = await fetchItem(id);

  console.log(item);

  const list = document.querySelector('.cart__items');
  console.log(list);
  list.appendChild(createCartItemElement(item));
};

const addEvent = () => {
  const btns = document.querySelectorAll('.item__add');
  btns.forEach((btn) => btn.addEventListener('click', addToCart));
};

const start = async () => {
  await addProduct();
  await addEvent();
};

window.onload = start;