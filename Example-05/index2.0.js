
const es = require("./service");

let email = "sachin@gmail.com";
let password = "sachin";

es.authenticate(email,password)
.then(response=>{  
    return es.getEmployee(email);
})
.then(response=>{
    return es.getDepartment(response.department);
})
.then(response=>{
    console.log(response);
})
.catch(error=>{
    console.log(error);
});