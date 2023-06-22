"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class QueryHandling extends sequelize_1.Model {
    static initModel(sequelize) {
        QueryHandling.init({
            QID: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                autoIncrement: true,
            },
            Sub_Date: {
                type: sequelize_1.DataTypes.DATE,
            },
            Cust_ID: {
                type: sequelize_1.DataTypes.STRING,
            },
            EmpID: {
                type: sequelize_1.DataTypes.STRING,
            },
            Res_Date: {
                type: sequelize_1.DataTypes.DATE,
            },
            Status: {
                type: sequelize_1.DataTypes.STRING,
            },
            Feedback: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            Query_Text: {
                type: sequelize_1.DataTypes.STRING,
            },
            Query_Response: {
                type: sequelize_1.DataTypes.STRING,
            },
        }, {
            sequelize,
            underscored: false,
            tableName: 'QueryHandling',
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        });
    }
}
exports.default = QueryHandling;
