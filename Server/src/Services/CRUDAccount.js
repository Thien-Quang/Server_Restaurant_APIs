const connection = require('../config/database')

const getAllAccount = async () => {
    try {
        let [results, fields] = await connection.query(`SELECT * FROM Account`);
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send("error.");
    }
}


const createNewAccount = async (username, password, role) => {
    try {
        const [results, fields] = await connection.query(
            `INSERT INTO Account (username,password,role) VALUES (?,?,?)`,
            [username, password, role]
        );
        console.log("Insert Accounts successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
};
const updateAccount = async (username, password, role) => {
    try {
        const [results, fields] = await connection.query(
            `UPDATE Account Set password = ? , role = ? where username =? `,
            [password, role, username]
        );

        console.log("Update successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}

const deleteAAccount = async (username) => {
    try {
        const [results, fields] = await connection.query(
            `DELETE FROM Account WHERE username=?`,
            [username]
        );
        console.log("Delete successful:", results);
        return true;
    } catch (err) {
        console.error("Error executing query:", err);
        return false;
    }
}
module.exports = {
    getAllAccount,
    createNewAccount,
    updateAccount,
    deleteAAccount,
}