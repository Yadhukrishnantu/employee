const db = require('./db')

const allEmployee = () => {
    return db.Employee.find().then(result => {
        if (result) {
            return {
                statusCode: 200,
                employees: result
            }
        } else {
            return {
                statusCode: 404,
                message: "No Data is available"
            }
        }
    })
}
const addEmployee = (id, uname, age, designation, salary) => {
   return db.Employee.findOne({id}).then(result => {
        if (result) {
            return {
                statusCode: 404,
                message: "Employee already Exist"

            }
        }
        else {
            // create object of employee model for new employee
            const newEmp = new db.Employee({
                id,
                uname,
                age,
                designation,
                salary
            })

            newEmp.save()

            return {
                statusCode: 200,
                message: "Employee added successfully"
            }
        }

    })
}
const removeEmployee = (eid)=>{
 return  db.Employee.deleteOne({id:eid}).then(result=>{
        if(result) {
            return{
                statusCode:200 ,
                message:"Employee Deleted"
            }
        }
        else{
            return{
              statusCode:404,
            message:"employee not present"

            }
            
        }
    })
}

const getAnEmp=(id)=>{
 return   db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"Employee not Present"
            }
        }
    })
}

const editEmp = (id,uname,age,desig,salary)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.uname=uname
            result.age=age
            result.designation=desig
            result.salary=salary

            result.save()
            return{
                statusCode:200,
                message: "Employee data Updated"
            }
        }else{
            return{
                statusCode:404,
                message:"Employee not Present"
            }
        }
    })
}

module.exports = {
    allEmployee, addEmployee ,removeEmployee , getAnEmp , editEmp
}