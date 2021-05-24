
const placeOrder = (orderNumber)=>{
    console.log("order placed : "+orderNumber);

    setTimeout(()=>{
        deliverOrder(orderNumber);    
    },1000);
}

const deliverOrder = (orderNumber)=>{    
    console.log("Order delivered");
}


placeOrder(101);
placeOrder(102);
placeOrder(103);