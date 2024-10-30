// const products = [
//   {
//     id: 1,
//     title: 'Custom Fit Polo Bear Oxford Shirt',
//     brand: 'POLO RALPH',
//     description: 'This is a custom fit polo bear',
//     discount: 50, 
//     images: ['1 Shirt.jpg', '2 Shirt.jpg', '3 Shirt.png'],
//     sizes: [
//       { size: 'S', price: 1600 },
//       { size: 'M', price: 2000 },
//       { size: 'L', price: 2200 },
//       { size: 'XL', price: 2700 },
//     ]
//   },
//   {
//     id: 2,
//     title: 'Classic Fit Polo T-Shirt',
//     brand: 'LACOSTE',
//     description: 'A classic fit with a subtle logo',
//     discount: 20,
//     images: ['6 shirt.jpg', '5 shirt.jpg', '4 shirt.jpg'],
//     sizes: [
//       { size: 'S', price: 1800 },
//       { size: 'M', price: 2100 },
//       { size: 'L', price: 2400 },
//       { size: 'XL', price: 2800 },
//     ]
//   },
//   {
//     id: 3,
//     title: 'Casual Fit Hoodie',
//     brand: 'NIKE',
//     description: 'Comfortable hoodie for everyday wear',
//     discount: 15,
//     images: ['7 shirt.jpg', '8 shirt.jpg', '3 Shirt.png'],
//     sizes: [
//       { size: 'S', price: 3000 },
//       { size: 'M', price: 3500 },
//       { size: 'L', price: 4000 },
//       { size: 'XL', price: 4500 },
//     ]
//   }
// ];

// function DisPrice(price, discount) {
//   return price - (price * (discount / 100));
// }

// function createProductCard(product) {
//   const card = document.createElement('div');
//   card.classList.add('maindiv');

//   card.innerHTML = `
//     <div class="mainimgdiv">
//         <div><img class="imgchange active" src="${product.images[0]}" alt="img1"></div>
//         <div><img class="imgchange" src="${product.images[1]}" alt="img2"></div>
//         <div><img class="imgchange" src="${product.images[2]}" alt="img3"></div>
//     </div>
//     <div class="firstimgdiv">
//         <img id="firstimg" src="${product.images[0]}" alt="firstimg">
//     </div>
//     <div class="innerdiv">
//         <h1 id="brand">${product.brand}</h1>
//         <h2 id="title">${product.title}</h2>
//         <p id="description">${product.description}</p>
//         <div class="price">
//             <span id="dis" class="dis">Rs${DisPrice(product.sizes[0].price, product.discount)} (${product.discount}%)</span><br>
//             <span id="org" class="org">Rs${product.sizes[0].price}</span>
//         </div>
//         <div class="sizes">
//             <label>Choose</label>
//             <div id="option"></div>
//         </div>
//         <div class="flex">
//         <button id="bag">Add to Bag</button>
//         <button class="update-btn" data-id="${product.id}"><i class="fas fa-edit"></i></button>  
//         </div>
//     </div>
//   `;

//   const imgElements = card.querySelectorAll('.imgchange');
//   const firstImg = card.querySelector('#firstimg');
//   imgElements.forEach((img, index) => {
//     img.src = `${product.images[index]}`;
//     img.addEventListener('click', () => {
//       firstImg.src = `${product.images[index]}`;
//       imgElements.forEach(img => img.classList.remove('active'));
//       img.classList.add('active');
//     });
//   });

//   const optionContainer = card.querySelector('#option');
//   product.sizes.forEach((sized, index) => {
//     const sizeButton = document.createElement('button');
//     sizeButton.textContent = sized.size;

//     if (index === 0) {
//       sizeButton.classList.add('active');
//     }

//     sizeButton.onclick = function() {
//       const selectedSizePrice = sized.price;
//       const selectedDiscountedPrice = DisPrice(selectedSizePrice, product.discount);

//       card.querySelector('#dis').textContent = `Rs ${selectedDiscountedPrice.toFixed(0)} (${product.discount}%)`;
//       card.querySelector('#org').textContent = `Rs ${selectedSizePrice.toFixed(0)}`;

//       Array.from(optionContainer.getElementsByTagName('button')).forEach(btn => btn.classList.remove('active'));
//       this.classList.add('active');
//     };
//     optionContainer.appendChild(sizeButton);
//   });

//   return card;
// }

// function renderProducts() {
//   const container = document.getElementById('product-container');
//   container.innerHTML = '';

//   products.forEach((product) => {
//     const productCard = createProductCard(product);
//     container.appendChild(productCard);
//   });

//   document.querySelectorAll('.update-btn').forEach(btn => {
//     btn.addEventListener('click', (event) => {
//       const id = parseInt(event.target.dataset.id);
//       openEditForm(id);
//     });
//   });
// }

// renderProducts();

// document.getElementById('add-product-btn').addEventListener('click', () => {
//   document.getElementById('product-form').style.display = 'block';
// });

// const sizes = []; 

// document.getElementById('add-size-btn').addEventListener('click', () => {
//   const sizeInput = document.querySelector('#sizes-container input[type="text"]');
//   const priceInput = document.querySelector('#sizes-container input[type="number"]');

//   if (sizeInput.value && priceInput.value) {
//     const sizeObj = { size: sizeInput.value, price: parseFloat(priceInput.value) };
//     sizes.push(sizeObj);

//     const sizeList = document.getElementById('size-list');
//     const sizeEntry = document.createElement('div');
//     sizeEntry.textContent = `${sizeInput.value}: ${priceInput.value} Rs`;
//     sizeEntry.classList.add('size-entry');

//     const removeButton = document.createElement('button');
//     removeButton.classList.add('remove-size-btn');
//     const removeIcon = document.createElement('i');
//     removeIcon.classList.add('fas', 'fa-trash'); 
//     removeButton.appendChild(removeIcon);
//     removeButton.addEventListener('click', () => {
//       const index = sizes.indexOf(sizeObj);
//       if (index > -1) {
//         sizes.splice(index, 1);
//         sizeList.removeChild(sizeEntry);
//       }
//     });

//     sizeEntry.appendChild(removeButton);
//     sizeList.appendChild(sizeEntry);

//     sizeInput.value = '';
//     priceInput.value = '';
//   }
// });

// const imagesInput = document.getElementById('product-images');
// const previewContainer = document.getElementById('image-preview');

// imagesInput.addEventListener('change', () => {
//   previewContainer.innerHTML = '';

//   Array.from(imagesInput.files).forEach((file) => {
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       const img = document.createElement('img');
//       img.src = e.target.result;
//       img.alt = file.name;
//       img.classList.add('preview-image');
//       previewContainer.appendChild(img);
//     };

//     reader.readAsDataURL(file); 
//   });
// });

// let editId = -1; 
// function openEditForm(id) {
//   editId = id;
//   const product = products.find(p => p.id === id);


//   document.getElementById('product-title').value = product.title;
//   document.getElementById('product-brand').value = product.brand;
//   document.getElementById('product-description').value = product.description;
//   document.getElementById('product-discount').value = product.discount;

 
//   sizes.length = 0;
//   product.sizes.forEach(size => sizes.push(size));
//   document.getElementById('size-list').innerHTML = '';

  
//   sizes.forEach((sizeObj, i) => {
//     const sizeEntry = document.createElement('button');
//     sizeEntry.classList.add('remove-size-btn');
//     sizeEntry.textContent = `${sizeObj.size}: ${sizeObj.price} Rs`;
//     const removeIcon = document.createElement('span');
//     removeIcon.classList.add('fas', 'fa-trash');

//     removeIcon.addEventListener('click', () => {
//       sizes.splice(i, 1);
//       sizeEntry.remove(); 
//     });

//     sizeEntry.appendChild(removeIcon);
//     document.getElementById('size-list').appendChild(sizeEntry);
//   });

 
//   const imagesInput = document.getElementById('product-images');
//   const previewContainer = document.getElementById('image-preview');
  
 
//   previewContainer.innerHTML = '';

 
//   product.images.forEach(image => {
//     const img = document.createElement('img');
//     img.src = image;
//     img.alt = image; 
//     img.classList.add('preview-image');
//     previewContainer.appendChild(img);
//   });

//   document.getElementById('product-form').style.display = 'block';


//   document.getElementById('submit-product-btn').addEventListener('click', () => {
//     const title = document.getElementById('product-title').value;
//     const brand = document.getElementById('product-brand').value;
//     const description = document.getElementById('product-description').value;
//     const discount = parseFloat(document.getElementById('product-discount').value);
//     const images = Array.from(imagesInput.files).map(file => file.name);
  
 
//     const existingProduct = products.find(p => p.title === title);
  
//     if (existingProduct && editId === -1) {
//       alert("Product already exists!");
//       return; 
//     }
  
//     if (title && brand && description && !isNaN(discount) && sizes.length > 0) {
//       const product = {
//         id: editId >= 0 ? products[editId].id : products.length + 1,
//         title,
//         brand,
//         description,
//         discount,
//         images: images.length ? images : (editId >= 0 ? products[editId].images : []),
//         sizes
//       };
  
//       if (editId >= 0) {
      
//         products[products.findIndex(p => p.id === editId)] = product;
//         editId = -1;
//       } else {
     
//         products.push(product);
//       }
  
//       renderProducts();
//       document.getElementById('size-list').innerHTML = '';
//       document.getElementById('product-form').style.display = 'none';
//     }
//   });
  
// }

// document.querySelectorAll('.update-btn').forEach(btn => {
//   btn.addEventListener('click', (event) => {
//     const id = parseInt(btn.dataset.id); 
//     openEditForm(id); 
//     document.getElementById('product-form').scrollIntoView({ behavior: 'smooth' });
//   });
// });





const products = [
  {
    id: 1,
    title: 'Custom Fit Polo Bear Oxford Shirt',
    brand: 'POLO RALPH',
    description: 'This is a custom fit polo bear',
    discount: 50,
    images: ['1 Shirt.jpg', '2 Shirt.jpg', '3 Shirt.png'],
    sizes: [
      { size: 'S', price: 1600 },
      { size: 'M', price: 2000 },
      { size: 'L', price: 2200 },
      { size: 'XL', price: 2700 },
    ]
  },
  {
    id: 2,
    title: 'Classic Fit Polo T-Shirt',
    brand: 'LACOSTE',
    description: 'A classic fit with a subtle logo',
    discount: 20,
    images: ['6 shirt.jpg', '5 shirt.jpg', '4 shirt.jpg'],
    sizes: [
      { size: 'S', price: 1800 },
      { size: 'M', price: 2100 },
      { size: 'L', price: 2400 },
      { size: 'XL', price: 2800 },
    ]
  },
  {
    id: 3,
    title: 'Casual Fit Hoodie',
    brand: 'NIKE',
    description: 'Comfortable hoodie for everyday wear',
    discount: 15,
    images: ['7 shirt.jpg', '8 shirt.jpg', '3 Shirt.png'],
    sizes: [
      { size: 'S', price: 3000 },
      { size: 'M', price: 3500 },
      { size: 'L', price: 4000 },
      { size: 'XL', price: 4500 },
    ]
  }
];

let editId = -1;
const sizes = [];

function DisPrice(price, discount) {
  return price - (price * (discount / 100));
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('maindiv');

  card.innerHTML = `
    <div class="mainimgdiv">
      <div><img class="imgchange active" src="${product.images[0]}" alt="img1"></div>
      <div><img class="imgchange" src="${product.images[1]}" alt="img2"></div>
      <div><img class="imgchange" src="${product.images[2]}" alt="img3"></div>
    </div>
    <div class="firstimgdiv">
      <img id="firstimg" src="${product.images[0]}" alt="firstimg">
    </div>
    <div class="innerdiv">
      <h1 id="brand">${product.brand}</h1>
      <h2 id="title">${product.title}</h2>
      <p id="description">${product.description}</p>
      <div class="price">
        <span id="dis" class="dis">Rs${DisPrice(product.sizes[0].price, product.discount)} (${product.discount}%)</span><br>
        <span id="org" class="org">Rs${product.sizes[0].price}</span>
      </div>
      <div class="sizes">
        <label>Choose</label>
        <div id="option"></div>
      </div>
      <div class="flex">
  <button id="bag">Add to Bag</button>
  <button class="update-btn" data-id="${product.id}"><i class="fas fa-edit"></i></button>
  <button class="delete-btn" data-id="${product.id}"><i class="fas fa-trash"></i></button>
</div>

    </div>
  `;

 
  const imgElements = card.querySelectorAll('.imgchange');
  const firstImg = card.querySelector('#firstimg');
  imgElements.forEach((img, index) => {
    img.src = `${product.images[index]}`;
    img.addEventListener('click', () => {
      firstImg.src = `${product.images[index]}`;
      imgElements.forEach(img => img.classList.remove('active'));
      img.classList.add('active');
    });
  });


  const optionContainer = card.querySelector('#option');
  product.sizes.forEach((sized, index) => {
    const sizeButton = document.createElement('button');
    sizeButton.textContent = sized.size;

    if (index === 0) {
      sizeButton.classList.add('active');
    }

    sizeButton.onclick = function() {
      const selectedSizePrice = sized.price;
      const selectedDiscountedPrice = DisPrice(selectedSizePrice, product.discount);

      card.querySelector('#dis').textContent = `Rs ${selectedDiscountedPrice.toFixed(0)} (${product.discount}%)`;
      card.querySelector('#org').textContent = `Rs ${selectedSizePrice.toFixed(0)}`;

      Array.from(optionContainer.getElementsByTagName('button')).forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    };
    optionContainer.appendChild(sizeButton);
  });

  return card;
}


function renderProducts() {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });



  document.querySelectorAll('.update-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
      const id = parseInt(btn.dataset.id); 
      openEditForm(id); 
      document.getElementById('product-form').scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const id = parseInt(event.target.closest('.delete-btn').dataset.id);
      deleteProduct(id);
    });
  });
}


function openEditForm(id) {
  editId = id;
  const product = products.find(p => p.id === id);

  document.getElementById('product-title').value = product.title;
  document.getElementById('product-brand').value = product.brand;
  document.getElementById('product-description').value = product.description;
  document.getElementById('product-discount').value = product.discount;

  sizes.length = 0;
  product.sizes.forEach(size => sizes.push(size));
  document.getElementById('size-list').innerHTML = '';

  sizes.forEach((sizeObj, i) => {
    const sizeEntry = document.createElement('div');
    sizeEntry.textContent = `${sizeObj.size}: ${sizeObj.price} Rs`;
    sizeEntry.classList.add('size-entry');

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-size-btn');
    removeButton.innerHTML = `<i class="fas fa-trash"></i>`;
    removeButton.addEventListener('click', () => {
      sizes.splice(i, 1);
      sizeEntry.remove();
    });

    sizeEntry.appendChild(removeButton);
    document.getElementById('size-list').appendChild(sizeEntry);
  });

  const previewContainer = document.getElementById('image-preview');
  previewContainer.innerHTML = '';

  product.images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = image;
    img.classList.add('preview-image');
    previewContainer.appendChild(img);
  });

  document.getElementById('product-form').style.display = 'block';
}

document.getElementById('add-product-btn').addEventListener('click', () => {
  
  document.getElementById('product-form').style.display = 'block';
  editId = -1; 
});




document.getElementById('add-size-btn').addEventListener('click', () => {
  const sizeInput = document.querySelector('#sizes-container input[type="text"]');
  const priceInput = document.querySelector('#sizes-container input[type="number"]');

  if (sizeInput.value && priceInput.value) {
    const sizeObj = { size: sizeInput.value, price: parseFloat(priceInput.value) };
    sizes.push(sizeObj);

    const sizeList = document.getElementById('size-list');
    const sizeEntry = document.createElement('div');
    sizeEntry.textContent = `${sizeInput.value}: ${priceInput.value} Rs`;
    sizeEntry.classList.add('size-entry');

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-size-btn');
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-trash'); 
    removeButton.appendChild(removeIcon);
    removeButton.addEventListener('click', () => {
      const index = sizes.indexOf(sizeObj);
      if (index > -1) {
        sizes.splice(index, 1);
        sizeList.removeChild(sizeEntry);
      }
    });

    sizeEntry.appendChild(removeButton);
    sizeList.appendChild(sizeEntry);

    sizeInput.value = '';
    priceInput.value = '';
  }
});

document.getElementById('product-images').addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  const previewContainer = document.getElementById('image-preview');
  previewContainer.innerHTML = '';

  files.forEach(file => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.alt = file.name;
    img.classList.add('preview-image');
    previewContainer.appendChild(img);
  });
});

function updateProduct() {
  if (editId === -1) return;

  const title = document.getElementById('product-title').value;
  const brand = document.getElementById('product-brand').value;
  const description = document.getElementById('product-description').value;
  const discount = parseFloat(document.getElementById('product-discount').value);


  const imageInput = document.getElementById('product-images');
  const images = Array.from(imageInput.files).map(file => file.name);

 
  const originalProduct = products.find(p => p.id === editId);
  const updatedProduct = {
    id: editId,
    title,
    brand,
    description,
    discount,
    images: images.length > 0 ? images : originalProduct.images, 
    sizes: [...sizes]
  };

  const index = products.findIndex(p => p.id === editId);
  if (index !== -1) {
    products[index] = updatedProduct;
    renderProducts();
    document.getElementById('product-form').style.display = 'none';
    
    
    imageInput.value = '';
  }
}


document.getElementById('submit-product-btn').addEventListener('click', () => {
  if (editId === -1) {
  
  } else {
    updateProduct();
  }
});

function deleteProduct(id) {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    renderProducts();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  
  document.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const id = parseInt(event.target.closest('.delete-btn').dataset.id);
      deleteProduct(id);
    });
  });
});


document.getElementById('add-product-btn').addEventListener('click', () => {
  const title = document.getElementById('product-title').value;
  const brand = document.getElementById('product-brand').value;
  const description = document.getElementById('product-description').value;
  const discount = parseFloat(document.getElementById('product-discount').value);
  const imagesInput = document.getElementById('product-images');
  const images = Array.from(imagesInput.files).map(file => file.name); 

  if (title && brand && description && !isNaN(discount) && sizes.length > 0) {
    const newProduct = {
      title,
      brand,
      description,
      discount,
      images,
      sizes
    };

    products.push(newProduct);
    renderProducts(); 
    document.getElementById('size-list').innerHTML = ''; 
    document.getElementById('product-form').style.display = 'none'; 
  } 
});

renderProducts();


 



