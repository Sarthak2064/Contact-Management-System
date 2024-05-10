require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const morgan = require("morgan");

const connectDB = require("./config/db");

const auth = require("./middlewares/auth");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(require("cors")());

// routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/contact"));

app.get("/", (req, res) => {
    console.log("Server is running");
    res.send("Server is running"); // Optionally, you can send a response to the client
});

// server configurations.
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    connectDB();
    console.log(`server listening on port: ${PORT}`);
});
