const connection = require('../config/database')

const getAllMaterial = async () => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Materials`);
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("error.");
    }
}

const getAMaterialbyID = async (Id) => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Materials WHERE id = ?`, [Id]);

        let Material = results && results.length > 0 ? results[0] : {};

        return Material;
    } catch (err) {
        console.error("Error executing query:", err);
        throw err; // Re-throw the error to be caught by the calling code
    }
}
const createNewMaterial = async (id, name, unit, current_quantity) => {
    try {
        const [results, fields] = await connection.query(
            `INSERT INTO Materials (id, name, unit, current_quantity) VALUES (?,?,?,?)`,
            [id, name, unit, current_quantity]
        );
        console.log("Insert Customer successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
};
const updateMaterial = async (id, name, unit, current_quantity) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE Materials Set name = ? , unit = ? ,current_quantity = ? where id =? `,
            [name, unit, current_quantity, id]
        );

        console.log("Update successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}

const deleteAMaterial = async (Id) => {
    try {
        const [results, fields] = await connection.query(
            `DELETE FROM Materials WHERE id=?`,
            [Id]
        );
        console.log("Delete successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}
module.exports = {
    getAllMaterial,
    getAMaterialbyID,
    createNewMaterial,
    updateMaterial,
    deleteAMaterial
}