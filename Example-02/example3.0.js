
const add = (n1,n2,callback)=>{

    setTimeout(()=>{
        callback({op:"+",result:n1+n2});
    },100);

}


const substract = (n1,n2,callback)=>{

    setTimeout(()=>{
        callback({op:"-",result:n1-n2});
    },50);
}

const multiply = (n1,n2,callback)=>{

    setTimeout(()=>{
        callback({op:"*",result:n1*n2});
    },200);
}

add(4,5,(result)=>{
    console.log(result);
});

substract(5,6,(result)=>{
    console.log(result);
})

multiply(6,7,(response)=>{
    console.log(response);
})