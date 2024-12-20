// imports

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// configuro para poder usar variables de entorno
require("dotenv").config();

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
        password: process.env.PASSWORD_DB,
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

/*
    - conectar la DB
    - consultar la db para obtener toda la info
    - cerrar la conexión
    - enviar respuesta a frontend

*/

api.get("/api/personajes", async (req, res) => {

    const connection = await getDBConection();

    const query = `SELECT 
        Personajes.Id_Personaje,
        Personajes.Nombre AS Nombre_Personaje,
        Personajes.Raza,
        Personajes.Descripción,
        Cortes.Nombre AS Nombre_Corte
    FROM Personajes 
    INNER JOIN Cortes ON Cortes.Id_Corte = Personajes.fk_corte`;
    const [result] = await connection.query(query);

    console.log(result);

    connection.end();

    res.status(200).json({
        status: "success",
        message: result
    });
})

//info de cortes
api.get("/api/cortes", async (req, res) => {
    const connection = await getDBConection();
    const query = "SELECT * FROM Cortes";
    const [result] = await connection.query(query)
    connection.end();
    res.status(200).json({
        success: true,
        result: result
    });
})

//buscar un solo personaje por id

api.get("/api/personajes/:id", async (req, res) => {
    const idPersonaje = req.params.id;
    const connection = await getDBConection();
    const query = "SELECT * FROM Personajes WHERE Id_Personaje = ?";
    const [result] = await connection.query(query, [idPersonaje]);
    connection.end();
    res.status(200).json({
        success: true,
        result: result[0]
    });
})
// crear nuevo personaje

/* 
    - recoger los datos de la receta que me envía frontend (body params)
    - conectar a la bbdd
    - añadir el nuevo pj a mi bbdd (INSERT INTO)
    - finalizar la conexión de la bbdd
    - responder a frontend
*/

api.post("/api/personajes", async (req, res) => {
    console.log(req.body);

    const { Nombre, Raza, Descripción } = req.body;
    if (!Nombre || !Raza || !Descripción) {
        res.status(400).json({
            success: false,
            message: "Missing fields"
        })
    } else {
    const connection = await getDBConection();
    const query = "INSERT INTO Personajes(Nombre, Raza, Descripción) VALUES (?, ?, ?)";
    const [result] = await connection.query(query, [Nombre, Raza, Descripción]);
    console.log(result);
    connection.end();
    res.status(201).json({
        success: true,
        id: result.insertId
        });
    }
})

// actualizar los datos de un personaje

/*
    - recoger los datos que me envía frontend
        - id del personaje (url params)
        - los campos del personaje (body params)
    - conectar a la db
    - actualizar el registro que tenga ese id con los nuevos --> update
    - finalizar conexión db
    - responder a frontend
*/

api.put("/api/personajes/:id", async (req, res) => {
const id = req.params.id;
const { Nombre, Raza, Descripción } = req.body;

if (!id) {
    res.status(400).json({
        success: false,
        message: "Falta el id del personaje que quieres modificar"
    })
} else {
const connection = await getDBConection();
const query = "UPDATE Personajes SET Nombre = ?, Raza = ?, Descripción = ? WHERE Id_Personaje = ?";
const [result] = await connection.query(query, [
    Nombre, Raza, Descripción, id
]);
connection.end();

res.status(200).json({ success: true });
    }
})

//eliminar personaje

api.delete("/api/personajes/:id", async (req, res) => {
    const connection = await getDBConection();
    const query = "DELETE from Personajes WHERE Id_Personaje = ?";
    const [result] = await connection.query(query, [req.params.id]);
    res.status(200).json({ success: true });
})