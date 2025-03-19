require("dotenv").config();
const express = require('express');
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render("index");
});
app.get('/work', (req, res) => {
    res.render("work");
});
app.get('/services', (req, res) => {
    res.render("services");
});


const PORT = process.env.PORT || 5501;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));