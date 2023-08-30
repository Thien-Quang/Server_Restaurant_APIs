const connection = require('../config/database')

const getAllDishes = async () => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Dishes`);
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("error.");
    }
}

const getADishesbyID = async (dishesId) => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Dishes WHERE id = ?`, [dishesId]);

        let employee = results && results.length > 0 ? results[0] : {};

        return employee;
    } catch (err) {
        console.error("Error executing query:", err);
        throw err; // Re-throw the error to be caught by the calling code
    }
}
const createNewDishes = async (id, name, category, price) => {
    try {
        const [results, fields] = await connection.query(
            `INSERT INTO Dishes (id, name, category, price) VALUES (?,?,?,?)`,
            [id, name, category, price]
        );
        console.log("Insert Dishes successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
};
const updateDishes = async (id, name, category, price) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE Dishes Set name = ? , category = ? ,price = ? where id =? `,
            [name, category, price, id]
        );

        console.log("Update successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}

const deleteADishes = async (dishesId) => {
    try {
        const [results, fields] = await connection.query(
            `DELETE FROM Dishes WHERE id=?`,
            [dishesId]
        );
        console.log("Delete successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}
module.exports = {
    getAllDishes,
    getADishesbyID,
    createNewDishes,
    updateDishes,
    deleteADishes
}