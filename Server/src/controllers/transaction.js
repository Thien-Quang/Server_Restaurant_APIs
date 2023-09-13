const { v4: uuidv4 } = require("uuid");
const { getAllTransaction, getATransactionbyID, createNewTransaction, updateTransactions, deleteATransaction } = require("../Services/CRUDTransaction")


const getTransactions = async (req, res) => {
    const results = await getAllTransaction();
    return res.send(results)
}

const createTransaction = async (req, res) => {
    const Transaction = req.body;
    const { material_id, quantity, transaction_type } = Transaction;

    const TransactionID = uuidv4(); // Tạo ID mới sử dụng uuidv4()

    try {
        const isSuccess = await createNewTransaction(TransactionID, material_id, quantity, transaction_type);
        if (isSuccess) {
            res.send("Transaction added successfully");
        } else {
            res.status(500).send("Failed to add Transaction");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding Transaction");
    }
};

const getTransactionByID = async (req, res) => {
    const TransactionId = req.params.id;
    try {
        const Transaction = await getATransactionbyID(TransactionId);
        if (Transaction) {
            res.send(Transaction);
        } else {
            res.status(404).send("Transaction not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving Transaction");
    }
}

const deleteTransactionByID = async (req, res) => {
    const TransactionID = req.params.id;

    try {
        const isSuccess = await deleteATransaction(TransactionID);
        if (isSuccess) {
            res.send("Transaction deleted successfully");
        } else {
            res.status(500).send("Failed to delete Transaction");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting Transaction");
    }
}

const updateTransactionByID = async (req, res) => {
    const Transaction = req.body;
    const { material_id, quantity, transaction_type } = Transaction;
    const TransactionID = req.params.id

    try {
        const isSuccess = await updateTransactions(TransactionID, material_id, quantity, transaction_type);
        if (isSuccess) {
            res.send("Transaction added successfully");
        } else {
            res.status(500).send("Failed to add Transaction");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding Transaction");
    }
}

module.exports = {
    getTransactions,
    createTransaction,
    getTransactionByID,
    deleteTransactionByID,
    updateTransactionByID
};