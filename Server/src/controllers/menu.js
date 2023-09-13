const { v4: uuidv4 } = require("uuid");
const { getAllMenu, getAMenubyID, createNewMenu, updateMenu, deleteAMenu } = require("../Services/CRUDMenu")


const getMenus = async (req, res) => {
    const results = await getAllMenu();
    return res.send(results)
}

const createMenu = async (req, res) => {
    const Menu = req.body;
    const { dish_id, day } = Menu;

    const MenuID = uuidv4(); // Tạo ID mới sử dụng uuidv4()

    try {
        const isSuccess = await createNewMenu(MenuID, dish_id, day);
        if (isSuccess) {
            res.send("Menu added successfully");
        } else {
            res.status(500).send("Failed to add Menu");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding Menu");
    }
};

const getMenuByID = async (req, res) => {
    const MenuId = req.params.id;
    try {
        const Menu = await getAMenubyID(MenuId);
        if (Menu) {
            res.send(Menu);
        } else {
            res.status(404).send("Menu not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving Menu");
    }
}

const deleteMenuByID = async (req, res) => {
    const MenuID = req.params.id;

    try {
        const isSuccess = await deleteAMenu(MenuID);
        if (isSuccess) {
            res.send("Menu deleted successfully");
        } else {
            res.status(500).send("Failed to delete Menu");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting Menu");
    }
}

const updateMenuByID = async (req, res) => {
    const Menu = req.body;
    const { dish_id, day } = Menu;
    const MenuID = req.params.id

    try {
        const isSuccess = await updateMenu(MenuID, dish_id, day);
        if (isSuccess) {
            res.send("Menu added successfully");
        } else {
            res.status(500).send("Failed to add Menu");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding Menu");
    }
}

module.exports = {
    getMenus,
    createMenu,
    getMenuByID,
    deleteMenuByID,
    updateMenuByID
};