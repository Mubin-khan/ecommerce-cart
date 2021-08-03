let totalprice = document.getElementById('itemsAmount');
let finalAmount = document.getElementById('totalAmount');
let shipCharge = document.getElementById('shipCharge');

const increment = (obj,price) => {
    let currentItemNumber = document.getElementById(obj);
    let productPrice = document.getElementById(price);
    if(currentItemNumber.value >= 5){
        alert("Maximum item choosen");
        currentItemNumber.style.backgroundColor = 'red';
        currentItemNumber.style.color = 'white';
    }else{
        currentItemNumber.value = parseInt(currentItemNumber.value)+1;
         productPrice.innerHTML = parseInt(productPrice.innerHTML)+15;
         totalprice.innerHTML = parseInt(totalprice.innerHTML)+15;  
    }
}
const decrement = (obj,price) => {
    let currentItemNumber = document.getElementById(obj);
    let productPrice = document.getElementById(price);
    if(currentItemNumber.value <= 0){
       alert("can't chose negative");
    }else{
        currentItemNumber.value = parseInt(currentItemNumber.value)-1;
        productPrice.innerHTML = parseInt(productPrice.innerHTML)-15;       
        totalprice.innerHTML = parseInt(totalprice.innerHTML)-15;
        currentItemNumber.style.backgroundColor = 'white';
        currentItemNumber.style.color = 'black';
    }
}

const checkprice = () => {
    finalAmount.innerHTML = parseInt(totalprice.innerHTML)+parseInt(shipCharge.innerHTML);
}

let coupne = document.getElementById('coupneId');
let msg = document.getElementById('message');

const discount = () => {
    if(coupne.value == 'mubin'){
        if(parseInt(finalAmount.innerHTML) > 65){
        finalAmount.innerHTML = parseInt(finalAmount.innerHTML)-15;
        msg.innerHTML = `hurray! you got discount`;
        }else{
            msg.innerHTML = `First buy something thank!`;
        }
    }else{ 
        msg.innerHTML = `enter valid code`;
    }
}

