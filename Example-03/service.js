
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

        if(object)
        {
            return true;
        }

        return false;
    }

    getEmployee(email)
    {
        let employee = employees.find(emp=>emp.email == email);
        if(employee)
        {
            return employee;
        }

        return null;
    }

    getDepartment(department)
    {
        return departments.find(d=>d.id == department);
    }
}

module.exports = new EmployeeService();