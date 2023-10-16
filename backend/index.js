const express = require("express");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

const routes = require("./src/routes");
app.use(routes)
const PORT = 7777;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))