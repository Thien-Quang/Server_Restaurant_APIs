const connection = require('../config/database')

const getAllEmployee = async () => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Employees`);
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("error.");
    }
}

const getAEmployeebyID = async (employeesId) => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Employees WHERE id = ?`, [employeesId]);

        let employee = results && results.length > 0 ? results[0] : {};

        return employee;
    } catch (err) {
        console.error("Error executing query:", err);
        throw err; // Re-throw the error to be caught by the calling code
    }
}
const createNewEmployee = async (id, first_name, last_name, position, salary, hire_date) => {
    try {
        const [results, fields] = await connection.query(
            `INSERT INTO Employees (id, first_name, last_name, position, salary, hire_date) VALUES (?,?,?,?,?,?)`,
            [id, first_name, last_name, position, salary, hire_date]
        );
        console.log("Insert Customer successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
};
const updateEmployees = async (id, first_name, last_name, position, salary, hire_date) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE Employees Set first_name = ? , last_name = ? ,position = ?,salary = ?,hire_date = ? where id =? `,
            [first_name, last_name, position, salary, hire_date, id]
        );

        console.log("Update successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}

const deleteAEmployee = async (customerId) => {
    try {
        const [results, fields] = await connection.query(
            `DELETE FROM Employees WHERE id=?`,
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
    getAllEmployee,
    getAEmployeebyID,
    createNewEmployee,
    updateEmployees,
    deleteAEmployee
}