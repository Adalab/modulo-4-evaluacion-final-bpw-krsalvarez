// imports

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// mi servidor

const api = express();

api.use(cors());
api.use(express.json());

// conexión bbdd
async function getDBConection() {
    const connection = await mysql.createConnection({
        host: "kbp1t.h.filess.io",
        port: 3306,
        user: "faerie_swimmingin",
        password: "c7494abdf0f8bb6da87b0901c03044d5380a23ae",
        database: "faerie_swimmingin"
    });
    connection.connect();
    return connection;
}

const port = 4005;
api.listen(port, () => {
    console.log(`Server is listening in http://localhost:${port}`);
})


//endpoints

