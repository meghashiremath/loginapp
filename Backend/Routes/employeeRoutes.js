const {createEmployee,  getAllEmployee ,getAllEmployeeById, deleteEmployeeById, updateEmployeeById}= require("../Controllers/employeeController");
const {cloudinaryFileUpload}=require("../Middlewares/fileUpload");
const routes = require("express").Router();


routes.get("/", getAllEmployee);

routes.post("/", cloudinaryFileUpload.single('picture'), createEmployee) // creating the emplloye

routes.put("/:id", cloudinaryFileUpload.single('picture'), updateEmployeeById) //updating the id
routes.get("/:id", getAllEmployeeById);

routes.delete("/:id",deleteEmployeeById);
module.exports=routes;