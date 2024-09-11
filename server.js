const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// routes
app.use(require("./routes/api.js"));


mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://ptomas14:Runningtree2@workouts.g3ajb.mongodb.net/")
  .then(() => app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
}))
.catch((err) => console.log(err))