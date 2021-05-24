
const logins = require("./login");
const employees = require("./employees");
const departments = require("./deparments");


class EmployeeService
{
    authenticate(email,password,callback)
    {
        let object = logins.find((login)=>{
            return login.email == email && login.password == password;
        });

        setTimeout(()=>{

            if(object)
            {
                callback({result:true});
            }
            else
            {
                callback({result:false});
            }

        },500);     
    }

    getEmployee(email,callback)
    {
        let employee = employees.find(emp=>emp.email == email);
       
        setTimeout(()=>{
            if(employee)
            {
                callback({result:employee});
            }
            else
            {
                callback({result:null});
            }
        },1000);

    }

    getDepartment(department,callback)
    {
        let dept = departments.find(d=>d.id == department);
        setTimeout(()=>{
            callback({
                result:dept
            })
        },1000)
    }
}

module.exports = new EmployeeService();