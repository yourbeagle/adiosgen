let express = require("express");
let app = express();
let port = 3000;

app.use(express.static("./public/src"));

app.listen(port, function() {
    console.log(`Listening at http://127.0.0.1:${port}`);
});
