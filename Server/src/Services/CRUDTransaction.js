const connection = require('../config/database')

const getAllTransaction = async () => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Transactions`);
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("error.");
    }
}

const getATransactionbyID = async (TransactionsId) => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Transactions WHERE id = ?`, [TransactionsId]);

        let Transaction = results && results.length > 0 ? results[0] : {};

        return Transaction;
    } catch (err) {
        console.error("Error executing query:", err);
        throw err; // Re-throw the error to be caught by the calling code
    }
}
const createNewTransaction = async (id, material_id, quantity, transaction_type) => {
    try {
        const [results, fields] = await connection.query(
            `INSERT INTO Transactions (id, material_id, quantity, transaction_type) VALUES (?,?,?,?)`,
            [id, material_id, quantity, transaction_type]
        );
        console.log("Insert successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
};
const updateTransactions = async (id, material_id, quantity, transaction_type) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE Transactions Set material_id = ? , quantity = ? ,transaction_type = ? where id =? `,
            [material_id, quantity, transaction_type, id]
        );

        console.log("Update successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}

const deleteATransaction = async (customerId) => {
    try {
        const [results, fields] = await connection.query(
            `DELETE FROM Transactions WHERE id=?`,
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
    getAllTransaction,
    getATransactionbyID,
    createNewTransaction,
    updateTransactions,
    deleteATransaction
}