const express = require('express');
const cookieParser = require("cookie-parser");

const router = require("./routes/index.js") ;
const app = express();


app.use(cookieParser());
app.use(express.json());
app.use(router);


app.listen(5000, () => console.log('Server running uhuyy at port 5000'))