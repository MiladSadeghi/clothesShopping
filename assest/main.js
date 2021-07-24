// variable
const clothes = document.querySelector('#shopping-cart')
      shoppingCardContent = document.querySelector('#cart-content tbody')
      showDeleteTable = document.querySelector('.Delete')

// eventListeners
evenetListeners()
function evenetListeners() {
  clothes.addEventListener('click', buyCloth)
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
  showDeleteTable.style.display = 'block'
  shoppingCardContent.appendChild(row)
  console.log(row);
}