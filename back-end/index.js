const express = require('express');
const cookieParser = require("cookie-parser");

const router = require("./routes/index.js") ;
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const public = __dirname + "/public/";

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public/uploads', express.static(path.join(__dirname, "public/uploads")));

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.get('/', function(req, res) {
    res.sendFile(path.join(public + "index.html"));
});

app.listen(5000, () => console.log('Server running uhuyy at port 5000'))