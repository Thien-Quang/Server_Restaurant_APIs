const Account = require('../models/account')


async function getAllAccounts() {
    try {
        const accounts = await Account.findAll(); // Lấy tất cả các bản ghi từ bảng "Account"
        return accounts;
    } catch (error) {
        console.error("Error fetching accounts:", error);
        throw error;
    }
}

module.exports = {
    getAllAccounts,
};