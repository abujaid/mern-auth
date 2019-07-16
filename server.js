const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI; // DB Config
const passport = require("passport");
const users = require("./routes/api/users");
const products = require("./routes/api/products");

const app = express();

// Body parser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
    db,
    { useNewUrlParser: true }
).then(() => console.log("MongoDB successfully connected...")
).catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/products", products);

const port = process.env.PORT || 6001;

app.listen(port, () => console.log(`Server up runnig on port ${port}`))