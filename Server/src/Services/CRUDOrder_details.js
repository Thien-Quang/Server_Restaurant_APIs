const connection = require('../config/database')

const getAllOrder_details = async () => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Order_details`);
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("error.");
    }
}

const getAOrder_detailbyID = async (Order_detailsId) => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Order_details WHERE id = ?`, [Order_detailsId]);

        let Order_detail = results && results.length > 0 ? results[0] : {};

        return Order_detail;
    } catch (err) {
        console.error("Error executing query:", err);
        throw err; // Re-throw the error to be caught by the calling code
    }
}
const createNewOrder_detail = async (id, order_id, dish_id, quantity, subtotal) => {
    try {
        const [results, fields] = await connection.query(
            `INSERT INTO Order_details (id, order_id, dish_id, quantity, subtotal) VALUES (?,?,?,?,?)`,
            [id, order_id, dish_id, quantity, subtotal]
        );
        console.log("Insert Customer successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
};
const updateOrder_details = async (id, order_id, dish_id, quantity, subtotal) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE Order_details Set order_id = ? , dish_id = ? ,quantity = ?,subtotal = ? where id =? `,
            [order_id, dish_id, quantity, subtotal, id]
        );

        console.log("Update successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}

const deleteAOrder_detail = async (customerId) => {
    try {
        const [results, fields] = await connection.query(
            `DELETE FROM Order_details WHERE id=?`,
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
    getAllOrder_details,
    getAOrder_detailbyID,
    createNewOrder_detail,
    updateOrder_details,
    deleteAOrder_detail
}