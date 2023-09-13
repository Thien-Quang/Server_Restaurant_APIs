const connection = require('../config/database')

const getAllOrder = async () => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Orders`);
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("error.");
    }
}

const getAOrderbyID = async (OrdersId) => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Orders WHERE id = ?`, [OrdersId]);

        let Order = results && results.length > 0 ? results[0] : {};

        return Order;
    } catch (err) {
        console.error("Error executing query:", err);
        throw err; // Re-throw the error to be caught by the calling code
    }
}
const createNewOrder = async (id, customer_id, total_amount) => {
    try {
        const [results, fields] = await connection.query(
            `INSERT INTO Orders (id, customer_id, total_amount) VALUES (?,?,?)`,
            [id, customer_id, total_amount]
        );
        console.log("Insert successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
};
const updateOrders = async (id, customer_id, total_amount) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE Orders Set customer_id = ? , total_amount = ?  where id =? `,
            [customer_id, total_amount, id]
        );

        console.log("Update successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}

const deleteAOrder = async (customerId) => {
    try {
        const [results, fields] = await connection.query(
            `DELETE FROM Orders WHERE id=?`,
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
    getAllOrder,
    getAOrderbyID,
    createNewOrder,
    updateOrders,
    deleteAOrder
}