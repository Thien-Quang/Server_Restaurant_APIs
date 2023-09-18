const { v4: uuidv4 } = require("uuid");
const { getAllAccount, createNewAccount, updateAccount, deleteAAccount, } = require("../Services/CRUDAccount")


const getAccount = async (req, res) => {
    const results = await getAllAccount();
    return res.send(results)
}

const createAccount = async (req, res) => {
    const customer = req.body;
    const { username, password, role } = customer;


    try {
        const isSuccess = await createNewAccount(username, password, role);
        if (isSuccess) {
            res.send("Customer added successfully");
        } else {
            res.status(500).send("Failed to add customer");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding customer");
    }
};


const deleteAccount = async (req, res) => {
    const username = req.params.username;

    try {
        const isSuccess = await deleteAAccount(username);
        if (isSuccess) {
            res.send("Customer deleted successfully");
        } else {
            res.status(500).send("Failed to delete customer");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting customer");
    }
}

const updateAccountByUsername = async (req, res) => {
    const account = req.body;
    const { username, password, role } = account;


    try {
        const isSuccess = await updateAccount(username, password, role);
        if (isSuccess) {
            res.send("Customer added successfully");
        } else {
            res.status(500).send("Failed to add customer");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding customer");
    }
}

module.exports = {
    getAccount,
    createAccount,
    deleteAccount,
    updateAccountByUsername
};