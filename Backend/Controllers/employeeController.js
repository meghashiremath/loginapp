const EmployeeModel= require ("../Models/Employee")

const createEmployee= async(req,res)=>{
    try{
        const body=req.body;
        body.picture= req.file ? req.file?.path: null;
        console.log(body)
        const emp=new EmployeeModel(body);
        await emp.save();
        res.status(201).json({
            message:"Employee profile is created",
            success:true,

        })

    }
    catch(err){
        res.status(500).json({
            message:"internal server error",
            success: false,
            error:err,
        })
    }
};
//get all employee details

const getAllEmployee= async(req,res)=>{
    try{
       let {page, limit, search}= req.query;
       page =parseInt(page)||1;
       limit=parseInt(limit)||5
;
       const skip= (page-1) *limit;
       let searchCriteria={ }
       if(search)
       { searchCriteria ={
        username:{
            $regex: search,
            $options:'i' //case insensitive
        }       }}
        const totalEmployees= await EmployeeModel.countDocuments(searchCriteria);
        
        const emps= await EmployeeModel.find(searchCriteria).skip(skip)
            .limit(limit)
            .sort({updateAt:-1});


        const totalPages=Math.ceil(totalEmployees/limit);

        res.status(200).json({
            message:"All Employees profile are created",
            success:true,
            data:{
                employees:emps,
                pagination:{
                    totalEmployees,
                    currentPage:page,
                    totalPages,
                    pageSize:limit
                }
            },

        })

    }
    catch(err){
        res.status(500).json({
            message:"internal server error",
            success: false,
            error:err,
        })
    }
}

//get employee details by id
const getAllEmployeeById= async(req,res)=>{
    try{
       const {id}= req.params;
        const emp= await EmployeeModel.findOne({_id:id});
        res.status(200).json({
            message:"Fetching Employees profile details",
            success:true,
            data:emp,

        })

    }
    catch(err){
        res.status(500).json({
            message:"internal server error",
            success: false,
            error:err,
        })
    }
}

const deleteEmployeeById= async(req,res)=>{
    try{
       const {id}= req.params;
        const emp= await EmployeeModel.findByIdAndDelete({_id:id});
        res.status(200).json({
            message:"Deleting Employees profile details",
            success:true,
        })

    }
    catch(err){
        res.status(500).json({
            message:"internal server error",
            success: false,
            error:err,
        })
    }
}


const  updateEmployeeById= async(req,res)=>{
    try{
        const {username, phone, email, department, designation, gender, course}=req.body;
        const {id}=req.params;
        let updateData={username, phone, email, department, designation, gender, course, updateAt:new Date()}
      //to update profile picture
      if(req.file){
        updateData.picture=req.file.path;
      }
       const updateEmployee= await EmployeeModel.findByIdAndUpdate(
        id,
        updateData,
        {new:true}
       );
       console.log(updateEmployee);
       if(!updateEmployee){
        return res.status(404).json({ message:"Employee profile not found"}) }
       
        res.status(200).json({
            message:"Employee profile is updated",
            success:true,
            data:updateEmployee

        })

    }
    catch(err){
        res.status(500).json({
            message:"internal server error",
            success: false,
            error:err,
        })
    }
};


module.exports={
    createEmployee,
    getAllEmployee,
    getAllEmployeeById,
    deleteEmployeeById,
    updateEmployeeById
}