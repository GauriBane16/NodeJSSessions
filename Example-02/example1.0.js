
const placeOrder = (orderNumber)=>{
    
    console.log("Order Placed : "+orderNumber);

    deliverOrder(orderNumber);
}

const deliverOrder = (orderNumber)=>{

    console.log("Ordere delivered : "+orderNumber);   
     
}

placeOrder(101);
placeOrder(102);
placeOrder(103);



