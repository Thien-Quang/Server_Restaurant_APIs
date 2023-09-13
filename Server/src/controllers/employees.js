const { v4: uuidv4 } = require("uuid");
const { getAllEmployee, getAEmployeebyID, createNewEmployee, updateEmployees, deleteAEmployee } = require("../Services/CRUDEmployees")


const getEmployees = async (req, res) => {
    const results = await getAllEmployee();
    return res.send(results)
}

const createEmployee = async (req, res) => {
    const employee = req.body;
    const { first_name, last_name, position, salary, hire_date } = employee;

    const employeeID = uuidv4(); // Tạo ID mới sử dụng uuidv4()

    try {
        const isSuccess = await createNewEmployee(employeeID, first_name, last_name, position, salary, hire_date);
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

const getEmployeeByID = async (req, res) => {
    const customerId = req.params.id;
    try {
        const customer = await getAEmployeebyID(customerId);
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

const deleteEmployeeByID = async (req, res) => {
    const customerID = req.params.id;

    try {
        const isSuccess = await deleteAEmployee(customerID);
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

const updateEmployeeByID = async (req, res) => {
    const customer = req.body;
    const { first_name, last_name, position, salary, hire_date } = customer;
    const employeeID = req.params.id

    try {
        const isSuccess = await updateEmployees(employeeID, first_name, last_name, position, salary, hire_date);
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
    getEmployees,
    createEmployee,
    getEmployeeByID,
    deleteEmployeeByID,
    updateEmployeeByID
};