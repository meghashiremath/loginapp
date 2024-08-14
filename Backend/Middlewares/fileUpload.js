const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');



cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_APIKEY,
    api_secret: process.env.CLOUD_APISECRET,
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'uploads',
      format: async (req, file) => 'png', // supports promises as well
      public_id: (req, file) => file.originalname.split('.')[0]+"",
    },
  });
   

  const cloudinaryFileUpload = multer({ storage: storage });
   
  module.exports={ cloudinaryFileUpload}