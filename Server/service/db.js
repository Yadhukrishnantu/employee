const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/ems')


// model

const Employee = mongoose.model('Employee',{
    
        id:String ,
        uname:String ,
        age: String,
        designation: String,
        salary:String
      
})

module.exports={
    Employee
}