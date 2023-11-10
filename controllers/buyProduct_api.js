async function getProductByID(id) {
  try {
    var result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
      responseType: "json",
    });
    console.log(result.data.content);
    renderProductByID(result.data.content);
    console.log("Thành công rồi");
  } catch (err) {
    console.log(err);
  }
}

function renderProductByID(product) {
  var content = product;
  var sizeButtons = "";
  for (var i = 0; i < content.size.length; i++) {
    sizeButtons += `<button class="btn-size" id="size">${content.size[i]}</button>`;
  }
  var htmlString = `
          <div class="product-img">
              <img src="${content.image}" alt="Product Image" />
          </div>
          <div class="product-info">
              <h1 class="product-name">${content.name}</h1>
              <p class="product-title">${content.description}</p>
              <h3 class="available-size">Available size</h3>
              <div class="button-size">
                  ${sizeButtons}
              </div>
              <div class="product-price">
                  <p class="price">${content.price}$</p>
              </div>
              <div class="product-quantity">
                  <button id="btn-add">+</button>
                  <p class="quantity">${content.quantity}</p>
                  <button id="btn-except">-</button>
              </div>
              <div class="add-to-cart">
                  <button id="to-cart">Add to Cart</button>
              </div>
          </div>
          `;
  document.querySelector("#tblProductByID").innerHTML = htmlString;
}

window.onload = function () {
  var urlParams = new URLSearchParams(window.location.search);
  var productId = urlParams.get("productid");
  getProductByID(productId);
};
