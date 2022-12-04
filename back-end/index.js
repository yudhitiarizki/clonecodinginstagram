const express = require('express');
const cookieParser = require("cookie-parser");

const router = require("./routes/index.js") ;
const app = express();

const bodyParser = require('body-parser');
const multer = require('multer');
// const cors = require('cors');
// const path = require('path')


app.use(cookieParser());
app.use(express.json());
app.use(router);

// app.use(cors());
app.use(bodyParser.json());


const filestorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toString() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jepg'){
        cb(null, true);
    } else {
        cb(null, false);
    }
}

app.use(multer({ storage: filestorage, fileFilter: fileFilter}).single('image'));

app.listen(5000, () => console.log('Server running uhuyy at port 5000'))