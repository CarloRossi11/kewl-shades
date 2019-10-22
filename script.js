var redShade = {
  img: "images/product-red.jpg",
  subtitle: "Rock-N-Stroll",
  color:"Red",
  price:199
}

var greenShade = {
  img: "images/product-green.jpg",
  subtitle: "Rock-N-Stroll",
  color:"Green",
  price:199
}

var blueShade = {
  img: "images/product-blue.jpg",
  subtitle: "Rock-N-Stroll",
  color:"Blue",
  price:199
}

var blackShade = {
  img: "images/product-black.jpg",
  subtitle: "Rock-N-Stroll",
  color:"Black",
  price:199
}

var shades = [redShade, greenShade, blueShade, blackShade]

function mobileProducts(product) {
  return `
    <div class="col peppers-product text-center">
      <img class="img-fluid" src="${product.img}" alt="Peppers Rock-N-Stroll">
      <p class="product-title">${product.subtitle}</p>
      <h3>${product.color}</h3>
      <div class="circles">
        <div class="circle red" data-index="0"></div>
        <div class="circle green" data-index="1"></div>
        <div class="circle blue" data-index="2"></div>
        <div class="circle black" data-index="3"></div>
      </div>
      <p class="product-price">$${product.price}</p>
      <div class="product-cta-container">
        <a href="#" class="btn btn-danger btn-lg">Add to Cart</a>
      </div>
    </div>
  `;
}

$(document).ready(function() {
  $('#mobile-products').html(mobileProducts( shades[0] ));

  $('#mobile-products').on('click', '.circle', function(){
    var index = $(this).data('index');
    $('#mobile-products').html(mobileProducts( shades[index] ));
  });
});
