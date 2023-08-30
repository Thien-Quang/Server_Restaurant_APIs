const { v4: uuidv4 } = require("uuid");
const { getAllDishes, getADishesbyID, createNewDishes, updateDishes, deleteADishes } = require("../Services/CRUDdishes")


const getDishes = async (req, res) => {
    const results = await getAllDishes();
    return res.send(results)
}

const createDishes = async (req, res) => {
    const employee = req.body;
    const { name, category, price } = employee;

    const ID = uuidv4(); // Tạo ID mới sử dụng uuidv4()

    try {
        const isSuccess = await createNewDishes(ID, name, category, price);
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

const getDishesByID = async (req, res) => {
    const customerId = req.params.id;
    try {
        const customer = await getADishesbyID(customerId);
        if (customer) {
            res.send(customer);
        } else {
            res.status(404).send("Dishes not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving customer");
    }
}

const deleteDidshesByID = async (req, res) => {
    const customerID = req.params.id;

    try {
        const isSuccess = await deleteADishes(customerID);
        if (isSuccess) {
            res.send("Dishes deleted successfully");
        } else {
            res.status(500).send("Failed to delete customer");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting customer");
    }
}

const updateDishesByID = async (req, res) => {
    const customer = req.body;
    const { name, category, price } = customer;
    const ID = req.params.id

    try {
        const isSuccess = await updateDishes(ID, name, category, price);
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
    getDishes,
    createDishes,
    getDishesByID,
    deleteDidshesByID,
    updateDishesByID
};