const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/users');
const Task = require('./models/task');
const ejsMate = require('ejs-mate');
const path = require('path');
const all = require("./router/routes");
const flash = require('express-flash');

// Connect to MongoDB using the MONGO_URL environment variable
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Successful connection to MongoDB");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
    });

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
const session = require('express-session');

app.use(session({
    secret: 'thisIsJustDumb',
    saveUninitialized: false,
    resave: false   // This is like signing the cookie
}));
app.use(flash());
app.use('/', all);

app.listen(8000, () => {
    console.log("App up and running on port 8000");
});
