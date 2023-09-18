const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseTest'); // Import kết nối cơ sở dữ liệu từ tệp cấu hình

const Account = sequelize.define(
    'Account',
    {
        username: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },

    },
    {
        tableName: 'Account', // Tên bảng trong cơ sở dữ liệu
        timestamps: false, // Tắt tự động thêm createdAt và updatedAt
    }
);
Account.prototype.verifyPassword = function (password) {
    // Thực hiện so sánh mật khẩu
    return this.password === password;
};

module.exports = Account;