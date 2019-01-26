let express = require("express");   

let app = express();

let getTrial = require("./routes/GetTrial");
app.use(getTrial);

app.use(express.static("public"));

const PORT = process.env.PORT || 8080;
app.listen(PORT,() => console.log(`Running on port ${PORT}`));
