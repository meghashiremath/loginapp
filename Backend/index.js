
const express = require ("express");
const app = express();

const bodyParser= require("body-parser");
const dotenv= require("dotenv").config();

require("./Models/db") //connecting the database
const PORT = process.env.PORT || 8000; // assigning the port
const EmployeeRouter= require("./Routes/employeeRoutes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes

app.use("/api/employee",EmployeeRouter)

// server assign
app.listen(PORT, ()=>{
    console.log("server is running on the port")
})