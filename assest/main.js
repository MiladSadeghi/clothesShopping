// variable
const clothes = document.querySelector('#shopping-cart')
      shoppingCardContent = document.querySelector('#cart-content tbody')
      showDeleteTable = document.querySelector('.Delete')
      clearCardBtn = document.querySelector('#clear-cart')

// eventListeners
evenetListeners()
function evenetListeners() {
  clothes.addEventListener('click', buyCloth)

  clearCardBtn.addEventListener('click', clearCart)

  shoppingCardContent.addEventListener('click', removeCloth)
}

// functions
function buyCloth(e) {
  e.preventDefault()
  if (e.target.classList.contains('add-to-card')) {
    const clothInformation = e.target.parentElement.parentElement
    clothInfo(clothInformation)
  }
}

function clothInfo(cInfo) {
  const cloth = {
    image: cInfo.querySelector('img').src,
    title: cInfo.querySelector('h4').textContent,
    price: cInfo.querySelectorAll('p')[2].textContent,
    id: cInfo.querySelector('a').getAttribute('data-id')
  }
  addToCard(cloth)
}

function addToCard(cInfo) {
  let row = document.createElement('tr')
  row.innerHTML = `
  <tr>
    <td>
      <img src=${cInfo.image} width="70px">
    </td>
    <td>${cInfo.title}</td>
    <td>${cInfo.price}</td>
    <td>
      <a href="#" class="remove" data-id="${cInfo.id}">X</a>
    </td>
  </tr>
  `
  shoppingCardContent.appendChild(row)
  showDeleteTable.style.display = 'block'
}

function removeCloth(e) {
  e.preventDefault()
  let cloth,clothId;
  if(e.target.classList.contains('remove')) {
    e.target.parentElement.parentElement.remove()
    cloth = e.target.parentElement.parentElement
    clothId = cloth.querySelector('a').getAttribute('data-id')
  }
}

function clearCart() {
  while (shoppingCardContent.firstChild) {
    shoppingCardContent.firstChild.remove()
  }
}