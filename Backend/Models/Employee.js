const mongoose =require("mongoose");
const Schema= mongoose.Schema;

const EmployeeSchema=new Schema({
    // employee_id:{
    //     type:String,
    //     require:true,
        
    // },
    username:{
        type:String,
        require:true,
        
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    phone:{
        type:String, 
        require:true,
      
    },
    department:{
        type:String,
        require:true,
    },
    designation:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    course:{
        type:String,
        // require:true,
    },
    picture:{
        type:String,
    },
    created_date:{
        type:Date,
        // require:true,
        default:new Date()
    },
    

},
{timestamps: true})

const EmloyeeModel = mongoose.model("employees",EmployeeSchema);
module.exports =EmloyeeModel;