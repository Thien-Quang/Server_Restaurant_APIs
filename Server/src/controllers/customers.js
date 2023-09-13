const { v4: uuidv4 } = require("uuid");
const { getAllCustomer, getACustomerbyID, createNewCustomer, updateCustomers, deleteACustomer } = require("../Services/CRUDCustomers")


const getCustomers = async (req, res) => {
    const results = await getAllCustomer();
    return res.send(results)
}

const createCustomers = async (req, res) => {
    const customer = req.body;
    const { first_name, last_name, email, phone } = customer;

    const customerID = uuidv4(); // Tạo ID mới sử dụng uuidv4()

    try {
        const isSuccess = await createNewCustomer(customerID, first_name, last_name, email, phone);
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

const getCustomerByID = async (req, res) => {
    const customerId = req.params.id;
    try {
        const customer = await getACustomerbyID(customerId);
        if (customer) {
            res.send(customer);
        } else {
            res.status(404).send("Customer not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving customer");
    }
}

const deleteCustomerByID = async (req, res) => {
    const customerID = req.params.id;

    try {
        const isSuccess = await deleteACustomer(customerID);
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

const updateCustomerByID = async (req, res) => {
    const customer = req.body;
    const { first_name, last_name, email, phone } = customer;
    const customerID = req.params.id

    try {
        const isSuccess = await updateCustomers(customerID, first_name, last_name, email, phone);
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
    getCustomers,
    createCustomers,
    getCustomerByID,
    deleteCustomerByID,
    updateCustomerByID
};