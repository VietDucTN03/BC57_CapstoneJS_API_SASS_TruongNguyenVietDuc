async function getDataApi() {
    try {
        var res = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET',
            responseType: 'json'
        });
        console.log(res.data.content);
        renderProduct(res.data.content);
        console.log('Thanh cong');
    } catch (err) {
        console.log(err);
    }
}

// console.log(axios);

function renderProduct(arrProduct) {
    var htmlString = '';
    for (var index = 0; index < arrProduct.length; index++) {
        var content = arrProduct[index];
        htmlString += `
        <div class="item item${content.id}">
            <div class="card">
              <div class="card-body">
                <img src="${content.image}" alt="">
              </div>
              <div class="card-footer">
                <h3 class="p-name">${content.name}</h3>
                <p class="p-title">${content.alias}</p>
                <div class="btnbuy-price">
                  <a href="./detail.html?productid=${content.id}" id="btn-buy">
                    Buy now
                  </a>
                  <div class="product-price">${content.price}$</div>
                </div>
              </div>
            </div>
          </div>
        `
    }
    document.querySelector('#tblProducts').innerHTML = htmlString;
    return htmlString;
}

window.onload = function() {
    getDataApi();
}