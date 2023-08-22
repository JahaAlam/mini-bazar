
let total = 0;
let discountPrice = 0;
let totalPrice = 0;

//----------------------item-1
function itemsNameAndPrice() {
    const price = getElementPrice('item-price');
    const itemName = getItemName('item-name');
    itemNameList(itemName);
    //calculate totalPrice
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    //set the item price
    setItemPrice('total-price', totalPrice);

    //set total
    total = totalPrice;
    setTotal('total', total);
    //calculate discount
    if (totalPrice >= 200) {
        const discountPrice = totalPrice * 20 / 100;
        //set dsicount price
        setDiscountPrice('discount-price', (discountPrice).toFixed(2));
        total = totalPrice - discountPrice;
        setTotal('total', total);
    }
}

//--------------item 2--------------------------------
function itemsNameAndPrice2() {
    const price = getElementPrice('item2-price');
    const itemName = getItemName('item2-name');
    itemNameList(itemName);
    //calculate total
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    //console.log((totalPrice).toFixed(2));
    //set the price
    setItemPrice('total-price', totalPrice);

    //set total
    total = totalPrice;
    setTotal('total', total);
    //calculate discount
    if (totalPrice >= 200) {
        const discountPrice = totalPrice * 20 / 100;
        //set dsicount price
        setDiscountPrice('discount-price', (discountPrice).toFixed(2));
        total = totalPrice - discountPrice;
        setTotal('total', total);
    }


}

function itemsNameAndPrice3() {
    const price = getElementPrice('item3-price');
    const itemName = getItemName('item3-name');
    itemNameList(itemName);
    //calculate total
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    //set the price
    setItemPrice('total-price', totalPrice);

    //set total
    total = totalPrice;
    setTotal('total', total);
    //calculate discount
    if (totalPrice >= 200) {
        const discountPrice = totalPrice * 20 / 100;
        //set dsicount price
        setDiscountPrice('discount-price', (discountPrice).toFixed(2));
        total = totalPrice - discountPrice;
        setTotal('total', total);
    }

}
function itemsNameAndPrice4() {
    const price = getElementPrice('item4-price');
    const itemName = getItemName('item4-name');
    itemNameList(itemName);
    //calculate total
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    //set the price
    setItemPrice('total-price', totalPrice);

    //set total
    total = totalPrice;
    setTotal('total', total);
    //calculate discount
    if (totalPrice >= 200) {
        const discountPrice = totalPrice * 20 / 100;
        //set dsicount price
        setDiscountPrice('discount-price', (discountPrice).toFixed(2));
        total = totalPrice - discountPrice;
        setTotal('total', total);
    }

}
function itemsNameAndPrice5() {
    const price = getElementPrice('item5-price');
    const itemName = getItemName('item5-name');
    itemNameList(itemName);
    //calculate total
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    //set the price
    setItemPrice('total-price', totalPrice);

    //set total
    total = totalPrice;
    setTotal('total', total);
    //calculate discount
    if (totalPrice >= 200) {
        const discountPrice = totalPrice * 20 / 100;
        //set dsicount price
        setDiscountPrice('discount-price', (discountPrice).toFixed(2));
        total = totalPrice - discountPrice;
        setTotal('total', total);
    }

}
function itemsNameAndPrice6() {
    const price = getElementPrice('item6-price');
    const itemName = getItemName('item6-name');
    itemNameList(itemName);
    //calculate total
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    //set the price
    setItemPrice('total-price', totalPrice);

    //set total
    total = totalPrice;
    setTotal('total', total);
    //calculate discount
    if (totalPrice >= 200) {
        const discountPrice = totalPrice * 20 / 100;
        //set dsicount price
        setDiscountPrice('discount-price', (discountPrice).toFixed(2));
        total = totalPrice - discountPrice;
        setTotal('total', total);
    }

}
function applyCoupon(){
    const coupon = getInputValue('coupon');
    if(coupon === 'SELL200'){
    
        console.log('code is in if');
    }else{
        console.log(' ar Partesina')
    }
}


function getInputValue(inputValue) {
    const couponValue = document.getElementById(inputValue);
    const couponValueString = couponValue.value;
    return couponValueString;

}

function getItemName(elmentNameId) {
    const itemName = document.getElementById(elmentNameId);
    const itemNameText = itemName.innerText;
    return itemNameText;
}

function getElementPrice(elementId) {
    const itemPrice = document.getElementById(elementId);
    const itemPriceValueString = itemPrice.innerText;
    const price = parseFloat(itemPriceValueString);
    return price;
    /*  console.log(price); */
}


//set item price
function setItemPrice(itemPriceId, totalPrice) {
    //console.log('working');
    const itemPrice = document.getElementById(itemPriceId);
    itemPrice.innerText = totalPrice;

}
//set discount price function
function setDiscountPrice(discountPriceId, discountPrice) {
    const discountItemPrice = document.getElementById(discountPriceId);
    discountItemPrice.innerText = discountPrice;
}

//set total price function
function setTotal(totalPriceId, total) {
    const totalPayAble = document.getElementById(totalPriceId);
    totalPayAble.innerText = total;
}


function itemNameList(itemName) {
    //console.log('testing count')
    const itemList = document.getElementById('item-list');
    const count = itemList.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${itemName}`;
    itemList.appendChild(p);

}







