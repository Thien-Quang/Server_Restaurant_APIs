const { v4: uuidv4 } = require("uuid");
const { getAllMaterial, getAMaterialbyID, createNewMaterial, updateMaterial, deleteAMaterial } = require("../Services/CRUDmaterials")


const getMaterials = async (req, res) => {
    const results = await getAllMaterial();
    return res.send(results)
}

const createMaterial = async (req, res) => {
    const Material = req.body;
    const { name, unit, current_quantity } = Material;

    const MaterialID = uuidv4(); // Tạo ID mới sử dụng uuidv4()

    try {
        const isSuccess = await createNewMaterial(MaterialID, name, unit, current_quantity);
        if (isSuccess) {
            res.send("material added successfully");
        } else {
            res.status(500).send("Failed to add material");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding material");
    }
};

const getMaterialByID = async (req, res) => {
    const materialId = req.params.id;
    try {
        const material = await getAMaterialbyID(materialId);
        if (material) {
            res.send(material);
        } else {
            res.status(404).send("material not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving material");
    }
}

const deleteMaterialByID = async (req, res) => {
    const materialID = req.params.id;

    try {
        const isSuccess = await deleteAMaterial(materialID);
        if (isSuccess) {
            res.send("material deleted successfully");
        } else {
            res.status(500).send("Failed to delete material");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting material");
    }
}

const updateMaterialByID = async (req, res) => {
    const material = req.body;
    const { name, unit, current_quantity } = material;
    const MaterialID = req.params.id

    try {
        const isSuccess = await updateMaterial(MaterialID, name, unit, current_quantity);
        if (isSuccess) {
            res.send("material added successfully");
        } else {
            res.status(500).send("Failed to add material");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding material");
    }
}

module.exports = {
    getMaterials,
    createMaterial,
    getMaterialByID,
    deleteMaterialByID,
    updateMaterialByID
};