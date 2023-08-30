const connection = require('../config/database')

const getAllCustomer = async () => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Customers`);
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("error.");
    }
}

const getACustomerbyID = async (customersId) => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Customers WHERE id = ?`, [customersId]);

        let customer = results && results.length > 0 ? results[0] : {};

        return customer;
    } catch (err) {
        console.error("Error executing query:", err);
        throw err; // Re-throw the error to be caught by the calling code
    }
}
const createNewCustomer = async (customerID, firstName, lastName, email, phone) => {
    try {
        const [results, fields] = await connection.query(
            `INSERT INTO Customers (id,first_name, last_name,email,phone) VALUES (?,?,?,?,?)`,
            [customerID, firstName, lastName, email, phone]
        );
        console.log("Insert Customer successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
};
const updateCustomers = async (customerID, firstName, lastName, email, phone) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE Customers Set first_name = ? , last_name = ? ,email = ?,phone = ? where id =? `,
            [firstName, lastName, email, phone, customerID]
        );

        console.log("Update successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}

const deleteACustomer = async (customerId) => {
    try {
        const [results, fields] = await connection.query(
            `DELETE FROM Customers WHERE id=?`,
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
    getAllCustomer,
    getACustomerbyID,
    createNewCustomer,
    updateCustomers,
    deleteACustomer
}