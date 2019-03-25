const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

const db = require("./config/config");

// conneect to MongoDB
mongoose.connect(db.db,{ useNewUrlParser: true })
                .then(() => console.log("MongoDB successfully connected"))
                .catch(err => console.log(err));
mongoose.Promise = global.Promise;

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

const port = 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}! `));
 