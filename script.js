function createProd(prod){
  let div = document.createElement('div');
  div.classList.add('product');
  div.textContent = `${prod.name} - ${prod.category}`;

  return div
}

const prodSect = document.querySelector('.prods')
const categoryS = document.getElementById('category');

const path = 'http://localhost:3000'

async function getAllProducts(){
  let response = await fetch(`${path}/prods`);
  let data = await response.json();

  data.forEach(prodd => {
    let product = createProd(prodd);
    prodSect.append(product);
  });
}
getAllProducts();

categoryS.addEventListener('change', () => {
  let category = categoryS.value;
  getProductsByCategory(category);
});

async function getProductsByCategory(category) {
  prodSect.innerText = '';
  let response = await fetch(`${path}/prods?category=${category}`);
  let data = await response.json();

  data.forEach(prod => {
    let product = createProd(prod);
    prodSect.append(product);
  });
}