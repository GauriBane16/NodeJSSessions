
const logins = require("./login");
const employees = require("./employees");
const departments = require("./deparments");


class EmployeeService
{
    authenticate(email,password)
    {
        let object = logins.find((login)=>{
            return login.email == email && login.password == password;
        });

        const p = new Promise(function(resolve,reject){

            if(object)
            {
                resolve(true);
            }
            else
            {
                reject(false);
            }
        });

        return p;
       
    }

    getEmployee(email)
    {
        let employee = employees.find(emp=>emp.email == email); 
        
        return new Promise((resolve,reject)=>{

            if(employee)
            {
                resolve(employee);
            }
            else
            {
                reject(null);
            }
        });      
    }

    getDepartment(department)
    {
        let dept = departments.find(d=>d.id == department);

        return new Promise((resolve,reject)=>{

            if(dept)
            {
                resolve(dept);
            }
            else
            {
                reject(dept);
            }
        });

    }
}

module.exports = new EmployeeService();