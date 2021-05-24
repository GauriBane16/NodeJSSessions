
const es = require("./service");

let status = es.authenticate("sachin@gmail.com","sachin");

if(status)
{
    let employee = es.getEmployee("sachin@gmail.com");
    
    if(employee != null)
    {
        let department = es.getDepartment(employee.department);
        if(department)
        {
            console.log(department);
        }
    }
}
else{
    console.log("Invalid email or password");
}