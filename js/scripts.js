

/* document.getElementById('prod1').addEventListener('click', function(){
    console.log('clicked')
    const itemPrice = document.getElementById('item-price');
    const itemPriceValueString = itemPrice.innerText;
    const price = parseFloat(itemPriceValueString).toFixed(2);
    console.log(price);

    const showItems = document.getElementById('show-item');
     const showItemsElement = showItems.innerText; 
   /* // const showItemList = document.createElement('li');
    showItemList.innerText = price; */
 

//----------------------item
function itemsNameAndPrice(){
    const price =  getElementPrice('item-price');
    console.log(price);
    const itemName = getItemName('item-name');
    console.log(itemName);
}

//--------------item 2
function itemsNameAndPrice2(){
    const price =  getElementPrice('item2-price');
    console.log(price);
    const itemName = getItemName('item2-name');
    console.log(itemName);
}
function itemsNameAndPrice3(){
    const price =  getElementPrice('item3-price');
    console.log(price);
    const itemName = getItemName('item3-name');
    console.log(itemName);
}
function itemsNameAndPrice4(){
    const price =  getElementPrice('item4-price');
    console.log(price);
    const itemName = getItemName('item4-name');
    console.log(itemName);
}
function itemsNameAndPrice5(){
    const price =  getElementPrice('item5-price');
    console.log(price);
    const itemName = getItemName('item5-name');
    console.log(itemName);
}
function itemsNameAndPrice6(){
    const price =  getElementPrice('item6-price');
    console.log(price);
    const itemName = getItemName('item6-name');
    console.log(itemName);
}

/* function ItemName(){
    const name = getItemName('item-name');
    console.log(name);
    
} */

function getItemName(elmentNameId){
    const itemName = document.getElementById(elmentNameId);
    const itemNameText = itemName.innerText;
    return itemNameText;
}

function getElementPrice(elementId){
    const itemPrice = document.getElementById(elementId);
    const itemPriceValueString = itemPrice.innerText;
    const price = parseFloat(itemPriceValueString).toFixed(2);
    return price;
   /*  console.log(price); */
}



