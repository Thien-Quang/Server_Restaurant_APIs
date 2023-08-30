const connection = require('../config/database')

const getAllMenu = async () => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Menu`);
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("error.");
    }
}

const getAMenubyID = async (MenuId) => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Menu WHERE id = ?`, [MenuId]);

        let Menu = results && results.length > 0 ? results[0] : {};

        return Menu;
    } catch (err) {
        console.error("Error executing query:", err);
        throw err; // Re-throw the error to be caught by the calling code
    }
}
const createNewMenu = async (id, dish_id, day) => {
    try {
        const [results, fields] = await connection.query(
            `INSERT INTO Menu (id, dish_id, day) VALUES (?,?,?)`,
            [id, first_name, last_name, position, salary, hire_date]
        );
        console.log("Insert  successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
};
const updateMenu = async (id, dish_id, day) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE Menu Set dish_id = ? , day = ? ? where id =? `,
            [dish_id, day, id]
        );

        console.log("Update successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}

const deleteAMenu = async (customerId) => {
    try {
        const [results, fields] = await connection.query(
            `DELETE FROM Menu WHERE id=?`,
            [customerId]
        );
        console.log("Delete successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}
module.exports = {
    getAllMenu,
    getAMenubyID,
    createNewMenu,
    updateMenu,
    deleteAMenu
}