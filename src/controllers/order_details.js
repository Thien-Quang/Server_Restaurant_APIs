const { v4: uuidv4 } = require("uuid");
const { getAllOrder_details, getAOrder_detailbyID, createNewOrder_detail, updateOrder_details, deleteAOrder_detail } = require("../Services/CRUDOrder_details")


const getOrder_details = async (req, res) => {
    const results = await getAllOrder_details();
    return res.send(results)
}

const createOrder_detail = async (req, res) => {
    const Order_detail = req.body;
    const { order_id, dish_id, quantity, subtotal } = Order_detail;

    const Order_detailID = uuidv4(); // Tạo ID mới sử dụng uuidv4()

    try {
        const isSuccess = await createNewOrder_detail(order_id, dish_id, quantity, subtotal);
        if (isSuccess) {
            res.send("Order_detail added successfully");
        } else {
            res.status(500).send("Failed to add Order_detail");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding Order_detail");
    }
};

const getOrder_detailByID = async (req, res) => {
    const Order_detailId = req.params.id;
    try {
        const Order_detail = await getAOrder_detailbyID(Order_detailId);
        if (Order_detail) {
            res.send(Order_detail);
        } else {
            res.status(404).send("Order_detail not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving Order_detail");
    }
}

const deleteOrder_detailByID = async (req, res) => {
    const Order_detailID = req.params.id;

    try {
        const isSuccess = await deleteAOrder_detail(Order_detailID);
        if (isSuccess) {
            res.send("Order_detail deleted successfully");
        } else {
            res.status(500).send("Failed to delete Order_detail");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting Order_detail");
    }
}

const updateOrder_detailByID = async (req, res) => {
    const Order_detail = req.body;
    const { order_id, dish_id, quantity, subtotal } = Order_detail;
    const Order_detailID = req.params.id

    try {
        const isSuccess = await updateOrder_details(Order_detailID, order_id, dish_id, quantity, subtotal);
        if (isSuccess) {
            res.send("Order_detail added successfully");
        } else {
            res.status(500).send("Failed to add Order_detail");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding Order_detail");
    }
}

module.exports = {
    getOrder_details,
    createOrder_detail,
    getOrder_detailByID,
    deleteOrder_detailByID,
    updateOrder_detailByID
};