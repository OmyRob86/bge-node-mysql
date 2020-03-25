const express = require("express");
const mysql = require("mysql");
const settings = require("./settings.json");

const sqlConfig = settings.sqlConfig;

const app = express();

app.listen(3000, () => {
    console.log("Server started...");
});

app.get("/", (req, res) => {
    const sqlConnection = mysql.createConnection(sqlConfig);

    sqlConnection.query(
        "SELECT id, email, firstname, lastname, birthdate FROM node_users", 
        (error, result) => {
            if (error) {
                console.log("ERROR :", error.code);
            } else {
                console.log("RESULT :", result);
            }
        }
    );

    res.send({
        id: 1,
        email: "harrysytito@gmail.com",
        firstname: "Omar",
        lastname: "Quevedo",
        birthdate: new Date(1986, 12, 4)
    });
});