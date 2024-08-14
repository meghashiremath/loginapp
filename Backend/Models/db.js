const mongoose= require("mongoose");
const MONGO_URL= process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log("database is connected successfully!!!!")
    })
    .catch((Error)=>{
    console.log("error occured during database connection",Error)
    })
