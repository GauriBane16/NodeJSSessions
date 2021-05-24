
const es = require("./service");

let email = "sachin@gmail.com";
let password = "sachin";

es.authenticate(email,password,(result)=>{
    if(result)
    {
        es.getEmployee(email,(response)=>{
            console.log(response.result);
            if(response.result != null)
            {
                console.log(response.result.department);
                es.getDepartment(response.result.department,(result)=>{
                    console.log(result);
                })
            }
        });
    }
});