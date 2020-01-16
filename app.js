const express = require("express");
const config = require("config");

const app = express();

app.use("/api/auth", require("./routes/auth.routes"));

const PORT = config.get("port") || 3000;



app.listen(PORT, () => {
    console.log(`App started at ${PORT}`);
});


