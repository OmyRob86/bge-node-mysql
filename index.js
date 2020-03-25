const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server started...");
});

app.get("/", (req, res) => {
    res.send({
        id: 1,
        email: "harrysytito@gmail.com",
        firstname: "Omar",
        lastname: "Quevedo",
        birthdate: new Date(1986, 12, 4)
    });
});