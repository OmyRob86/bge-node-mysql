const express = require("express");
const mysql = require("mysql");
const settings = require("./settings.json");

const sqlConfig = settings.sqlConfig;

const app = express();

app.listen(3000, () => {
    console.log("Server started...");
});

app.get("api/user", (req, res) => {
    const sqlConnection = mysql.createConnection(sqlConfig);

    sqlConnection.query(
        "SELECT id, email, firstname, lastname, birthdate FROM node_users WHERE id = 2 LIMIT 1", 
        (error, result) => {
            if (error) {
                console.log("ERROR :", error.code);
            } else {
                res.send(result[0]);
            }
            sqlConnection.end();
        }
    );
});

app.get("api/user/create", (req, res) => {
    const sqlConnection = mysql.createConnection(sqlConfig);
    
    sqlConnection.query(
        "INSERT INTO node_users VALUES (NULL, 'loco@yopmail.net', 'pass', 'pedro' 'tata', '1950-03-18',)",
        (error, result) => {
            if (error) {
                console.log("ERROR :", error.code);
                res.status(503).send("oups... en error has occured !");
            }else {
                console.log(result);
                res.send({ status: "OK" });
            }
            sqlConnection.end();
        }
    );
});