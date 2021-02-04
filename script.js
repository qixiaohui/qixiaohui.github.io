function alertBuy() {
  var products = document.getElementsByName("product");
  var product = "A";
  for (var i = 0, length = products.length; i < length; i++) {
    if (products[i].checked) {
      product = products[i].value;
      break;
    }
  }
  
  var productNum = document.getElementById("numSelect").value;
  
  const postObj = {
    pcmPixelPostMessageEvent: {
        id: '54321',
        ev: 'Purchase',
    }
  };
  window.postMessage(postObj, '*');
  
  alert("You've just bought on Tom's main frame " + productNum + " " + product + "(s)!");
}
