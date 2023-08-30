const { v4: uuidv4 } = require("uuid");
const { getAllOrder, getAOrderbyID, createNewOrder, updateOrders, deleteAOrder } = require("../Services/CRUDOrders")


const getOrders = async (req, res) => {
    const results = await getAllOrder();
    return res.send(results)
}

const createOrder = async (req, res) => {
    const Order = req.body;
    const { customer_id, total_amount } = Order;

    const OrderID = uuidv4(); // Tạo ID mới sử dụng uuidv4()

    try {
        const isSuccess = await createNewOrder(OrderID, customer_id, total_amount);
        if (isSuccess) {
            res.send("Order added successfully");
        } else {
            res.status(500).send("Failed to add Order");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding Order");
    }
};

const getOrderByID = async (req, res) => {
    const OrderId = req.params.id;
    try {
        const Order = await getAOrderbyID(OrderId);
        if (Order) {
            res.send(Order);
        } else {
            res.status(404).send("Order not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving Order");
    }
}

const deleteOrderByID = async (req, res) => {
    const OrderID = req.params.id;

    try {
        const isSuccess = await deleteAOrder(OrderID);
        if (isSuccess) {
            res.send("Order deleted successfully");
        } else {
            res.status(500).send("Failed to delete Order");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting Order");
    }
}

const updateOrderByID = async (req, res) => {
    const Order = req.body;
    const { customer_id, total_amount } = Order;
    const OrderID = req.params.id

    try {
        const isSuccess = await updateOrders(OrderID, customer_id, total_amount);
        if (isSuccess) {
            res.send("Order added successfully");
        } else {
            res.status(500).send("Failed to add Order");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding Order");
    }
}

module.exports = {
    getOrders,
    createOrder,
    getOrderByID,
    deleteOrderByID,
    updateOrderByID
};