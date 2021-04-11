function appendData(data) {
  console.log(data);
  createImg(data);
  createProductDescription(data);
  createProductTag(data);
  createRatingBox(data);
  createPriceBox(data);
  createCountdownTimer(data);
  createOption1(data);
  createOption2(data);
  createOption3(data);
  createAddToBox(data);
  createLeadTime(data);
  createShippingTime(data);
  createOption1Chose();
  createOption2Chose();
  createOption3Chose();
  createTotalChose();

  testDisableButton1();
  testDisableButton2();
  testDisableButton3();
  checkOptionChoseDisplay();
}

//============================================================================================================================================
//====CREATE HTML FUNCTIONS======================================================================================================================
//============================================================================================================================================

function createImg(data) {
    var mainContainer = document.getElementById("img-div");
    var img = document.createElement("img");
    mainContainer.appendChild(img);
    img.classList.add('image');
    img.src = data.product.gallery[0].main;
    img.alt = 'image of product';
}

function createProductDescription(data) {
    var mainContainer = document.getElementById("product-description-id");
    var p = document.createElement("p");
    mainContainer.appendChild(p);
    p.classList.add("product-description-text");
    p.innerHTML = data.product.name;
}

function createProductTag(data) {
    var mainContainer = document.getElementById("product-description-tag");
    var p = document.createElement("p");
    mainContainer.appendChild(p);
    p.classList.add("tag-text");
    p.innerHTML = data.product.tags[0];
}

function createRatingBox(data) {
    var mainContainer = document.getElementById("rating-box");
    var p1 = document.createElement("p");
    mainContainer.appendChild(p1);
    p1.classList.add("rating");
    p1.innerHTML = data.product.reviews.rating;

    var p2 = document.createElement("p");
    mainContainer.appendChild(p2);
    p2.classList.add("reviews");
    p2.innerHTML = data.product.reviews.count + " " + "Reviews";

    var p3 = document.createElement("p");
    mainContainer.appendChild(p3);
    p3.classList.add("buyers");
    p3.innerHTML = data.product.reviews.total_buyers + " " + "buyers";
}

function createPriceBox(data) {
    var mainContainer = document.getElementById("price-box");
    var p1 = document.createElement("p");
    mainContainer.appendChild(p1);
    p1.classList.add("discount-price-range");
    var priceSmallSymbol = data.product.options.battery_accessories.price.currency.symbol;
    var priceSmall = data.product.options.battery_accessories.price.value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    var priceLargeSymbol = data.product.options['4k'].price.currency.symbol;
    var priceLarge = data.product.options['4k'].price.value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    p1.innerHTML = priceSmallSymbol + " " + priceSmall + " - " + priceLargeSymbol + " " + priceLarge;

    var p2 = document.createElement("p");
    mainContainer.appendChild(p2);
    p2.classList.add("option-text");
    p2.innerHTML = "/ Option";

    var p3 = document.createElement("p");
    mainContainer.appendChild(p3);
    p3.classList.add("devide-text");
    p3.innerHTML = " | ";

    var p4 = document.createElement("p");
    mainContainer.appendChild(p4);
    p4.classList.add("amount-option");
    p4.innerHTML = "2 Options ";

    var p5 = document.createElement("p");
    mainContainer.appendChild(p5);
    p5.classList.add("min-order-text");
    p5.innerHTML = "(Min.Order)";

    var p6 = document.createElement("p");
    mainContainer.appendChild(p6);
    p6.classList.add("old-price-range");
    var oldPriceSmallSymbol = data.product.options.battery_accessories.old_price.currency.symbol;
    var oldPriceSmall = data.product.options.battery_accessories.old_price.value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    var oldPriceLargeSymbol = data.product.options['4k'].old_price.currency.symbol;
    var oldPriceLarge = data.product.options['4k'].old_price.value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    p6.innerHTML = oldPriceSmallSymbol + " " + oldPriceSmall + " - " + oldPriceLargeSymbol + " " + oldPriceLarge;
}

function createCountdownTimer(data) {
    var mainContainer = document.getElementById("countdown-timer");
    var p1 = document.createElement("p");
    mainContainer.appendChild(p1);
    p1.classList.add("discount-amount");
    p1.innerHTML = data.product.discount.amount + " OFF";

    var p2 = document.createElement("p");
    mainContainer.appendChild(p2);
    p2.id = "time-left";
    p2.classList.add("time-left");

    var countDownDate = new Date(data.product.discount.end_date).getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if(distance >= 0) {
        document.getElementById("time-left").innerHTML = days + "d:" + hours + "h:" + minutes + "m:" + seconds + "s";
      }
      if(distance < 0) {
        clearInterval(x);
        document.getElementById("time-left").innerHTML =  "0d:00h:00m:00s";
      }
    }, 1000);
}

function createOption1(data) {
    var mainContainer = document.getElementById("option-1");
    var p1 = document.createElement("p");
    mainContainer.appendChild(p1);
    p1.id = "option-1-name";
    p1.classList.add("option-1-name");
    p1.innerHTML = data.product.options['4k'].label;

    var p2 = document.createElement("p");
    mainContainer.appendChild(p2);
    p2.id = "option-1-price";
    p2.classList.add("option-1-price");
    p2.innerHTML = data.product.options['4k'].price.currency.symbol + " " + data.product.options['4k'].price.value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function createOption2(data) {
    var mainContainer = document.getElementById("option-2");
    var p1 = document.createElement("p");
    mainContainer.appendChild(p1);
    p1.id = "option-2-name";
    p1.classList.add("option-2-name");
    p1.innerHTML = data.product.options['1080p'].label;

    var p2 = document.createElement("p");
    mainContainer.appendChild(p2);
    p2.id = "option-2-price";
    p2.classList.add("option-2-price");
    p2.innerHTML = data.product.options['1080p'].price.currency.symbol + " " + data.product.options['1080p'].price.value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function createOption3(data) {
    var mainContainer = document.getElementById("option-3");
    var p1 = document.createElement("p");
    mainContainer.appendChild(p1);
    p1.id = "option-3-name";
    p1.classList.add("option-3-name");
    p1.innerHTML = data.product.options['battery_accessories'].label;

    var p2 = document.createElement("p");
    mainContainer.appendChild(p2);
    p2.id = "option-3-price";
    p2.classList.add("option-3-price");
    p2.innerHTML = data.product.options['battery_accessories'].price.currency.symbol + " " + data.product.options['battery_accessories'].price.value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function createAddToBox(data) {
    var mainContainer = document.getElementById("add-to-box");
    var p1 = document.createElement("p");
    mainContainer.appendChild(p1);
    p1.classList.add("ship-where-text");
    p1.innerHTML = "Ship to " + data.product.shipping.method.country;

    var p2 = document.createElement("p");
    mainContainer.appendChild(p2);
    p2.classList.add("ship-by-text");
    p2.innerHTML = "by " + data.product.shipping.method.title;

    var p3 = document.createElement("p");
    mainContainer.appendChild(p3);
    p3.classList.add("current-amount");
    p3.innerHTML = data.product.shipping.method.cost.currency.symbol + " " + data.product.shipping.method.cost.value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function createLeadTime(data) {
    var mainContainer = document.getElementById("lead-time");
    var p = document.createElement("p");
    mainContainer.appendChild(p);
    p.classList.add("lead-time-text");
    p.innerHTML = "Lead Time " + data.product.shipping.lead_time.value;
}

function createShippingTime(data) {
    var mainContainer = document.getElementById("shipping-time");
    var p = document.createElement("p");
    mainContainer.appendChild(p);
    p.classList.add("shipping-time-text");
    p.innerHTML = "Shipping Time " + data.product.shipping.method.shipping_time.value;
}

function createOption1Chose() {
  var mainContainer = document.getElementById("option-1-chose");
  var p1 = document.createElement("p");
  mainContainer.appendChild(p1);
  p1.id = "option-1-chose-text";
  p1.classList.add("option-1-chose-text");

  var p2 = document.createElement("p");
  mainContainer.appendChild(p2);
  p2.id = "option-1-chose-total";
  p2.classList.add("option-1-chose-total");
}

function createOption2Chose() {
  var mainContainer = document.getElementById("option-2-chose");
  var p1 = document.createElement("p");
  mainContainer.appendChild(p1);
  p1.id = "option-2-chose-text";
  p1.classList.add("option-2-chose-text");

  var p2 = document.createElement("p");
  mainContainer.appendChild(p2);
  p2.id = "option-2-chose-total";
  p2.classList.add("option-2-chose-total");
}

function createOption3Chose() {
  var mainContainer = document.getElementById("option-3-chose");
  var p1 = document.createElement("p");
  mainContainer.appendChild(p1);
  p1.id = "option-3-chose-text";
  p1.classList.add("option-3-chose-text");

  var p2 = document.createElement("p");
  mainContainer.appendChild(p2);
  p2.id = "option-3-chose-total";
  p2.classList.add("option-3-chose-total");
}

function createTotalChose() {
  var mainContainer = document.getElementById("option-total-chose");
  var p1 = document.createElement("p");
  mainContainer.appendChild(p1);
  p1.id = "option-total-chose-text";
  p1.classList.add("option-total-chose-text");
}

//============================================================================================================================================
//====BUTTONS FUNCTIONS======================================================================================================================
//============================================================================================================================================

function testDisableButton1() {
  var btn = document.getElementById("option-1-min-btn");
  var text = document.getElementById("option-1-text");

  if(Number(text.innerHTML) == 0) {
    btn.disabled = true;
    btn.classList.remove('hover-option-1-min-btn');
  }
  if(Number(text.innerHTML) > 0) {
    btn.disabled = false;
    btn.classList.add('hover-option-1-min-btn');
  }
}

function testDisableButton2() {
  var btn = document.getElementById("option-2-min-btn");
  var text = document.getElementById("option-2-text");

  if(Number(text.innerHTML) == 0) {
    btn.disabled = true;
    btn.classList.remove('hover-option-2-min-btn');
  }
  if(Number(text.innerHTML) > 0) {
    btn.disabled = false;
    btn.classList.add('hover-option-2-min-btn');
  }
}

function testDisableButton3() {
  var btn = document.getElementById("option-3-min-btn");
  var text = document.getElementById("option-3-text");

  if(Number(text.innerHTML) == 0) {
    btn.disabled = true;
    btn.classList.remove('hover-option-3-min-btn');
  }
  if(Number(text.innerHTML) > 0) {
    btn.disabled = false;
    btn.classList.add('hover-option-3-min-btn');
  }
}

function decrementOption1() {
  var text = document.getElementById("option-1-text");
  var newText = Number(text.innerHTML);

  newText--;
  text.innerHTML = newText;
  testDisableButton1();
  checkOptionChoseDisplay();
  updateOptionChose();
}

function incrementOption1() {
  var text = document.getElementById("option-1-text");
  var newText = Number(text.innerHTML);

  newText++;
  text.innerHTML = newText;
  testDisableButton1();
  checkOptionChoseDisplay();
  updateOptionChose();
}

function decrementOption2() {
  var text = document.getElementById("option-2-text");
  var newText = Number(text.innerHTML);

  newText--;
  text.innerHTML = newText;
  testDisableButton2();
  checkOptionChoseDisplay();
  updateOptionChose();
}

function incrementOption2() {
  var text = document.getElementById("option-2-text");
  var newText = Number(text.innerHTML);

  newText++;
  text.innerHTML = newText;
  testDisableButton2();
  checkOptionChoseDisplay();
  updateOptionChose();
}

function decrementOption3() {
  var text = document.getElementById("option-3-text");
  var newText = Number(text.innerHTML);

  newText--;
  text.innerHTML = newText;
  testDisableButton3();
  checkOptionChoseDisplay();
  updateOptionChose();
}

function incrementOption3() {
  var text = document.getElementById("option-3-text");
  var newText = Number(text.innerHTML);

  newText++;
  text.innerHTML = newText;
  testDisableButton3();
  checkOptionChoseDisplay();
  updateOptionChose();
}

function updateOptionChose() {
  var option1Text = document.getElementById("option-1-chose-text");
  var getOption1Text = document.getElementById("option-1-name").innerHTML;
  var getOption1Amount = document.getElementById("option-1-text").innerHTML;
  var finalOption1Text = getOption1Amount + " - " + getOption1Text;
  option1Text.innerHTML = finalOption1Text;

  var option1TotalText = document.getElementById("option-1-chose-total");
  var getOption1Value = document.getElementById("option-1-price").innerHTML;
  var option1Total = Number(getOption1Amount) * Number(getOption1Value.substring(2));
  finalOption1Total = "= " + getOption1Value.substring(0, 1) + " " + option1Total.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  option1TotalText.innerHTML = finalOption1Total;

  var option2Text = document.getElementById("option-2-chose-text");
  var getOption2Text = document.getElementById("option-2-name").innerHTML;
  var getOption2Amount = document.getElementById("option-2-text").innerHTML;
  var finalOption2Text = getOption2Amount + " - " + getOption2Text;
  option2Text.innerHTML = finalOption2Text;

  var option2TotalText = document.getElementById("option-2-chose-total");
  var getOption2Value = document.getElementById("option-2-price").innerHTML;
  var option2Total = Number(getOption2Amount) * Number(getOption2Value.substring(2));
  finalOption2Total = "= " + getOption2Value.substring(0, 1) + " " + option2Total.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  option2TotalText.innerHTML = finalOption2Total;

  var option3Text = document.getElementById("option-3-chose-text");
  var getOption3Text = document.getElementById("option-3-name").innerHTML;
  var getOption3Amount = document.getElementById("option-3-text").innerHTML;
  var finalOption3Text = getOption3Amount + " - " + getOption3Text;
  option3Text.innerHTML = finalOption3Text;

  var option3TotalText = document.getElementById("option-3-chose-total");
  var getOption3Value = document.getElementById("option-3-price").innerHTML;
  var option3Total = Number(getOption3Amount) * Number(getOption3Value.substring(2));
  finalOption3Total = "= " + getOption3Value.substring(0, 1) + " " + option3Total.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  option3TotalText.innerHTML = finalOption3Total;

  var totalOptionsText = document.getElementById("option-total-chose-text");
  var finalTotalValue = option1Total + option2Total + option3Total;
  var finalTotalOptions = "= " + getOption3Value.substring(0, 1) + " " + finalTotalValue.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  totalOptionsText.innerHTML = finalTotalOptions;
}

//============================================================================================================================================
//====OPTIONS CHOSE FUNCTIONS======================================================================================================================
//============================================================================================================================================

function checkOptionChoseDisplay() {
  var display = document.getElementById("options-chose");
  var option1Text = document.getElementById("option-1-text");
  var option2Text = document.getElementById("option-2-text");
  var option3Text = document.getElementById("option-3-text");

  if(Number(option1Text.innerHTML) == 0 && Number(option2Text.innerHTML) == 0 && Number(option3Text.innerHTML) == 0) {
    display.classList.add('options-chose-displayNo');
  } else {
    display.classList.remove('options-chose-displayNo');
  }
}




//need space
