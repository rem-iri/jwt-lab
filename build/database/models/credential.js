"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Credential extends sequelize_1.Model {
    static initModel(sequelize) {
        Credential.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            ClientID: {
                type: sequelize_1.DataTypes.STRING,
            },
            SecretKey: {
                type: sequelize_1.DataTypes.STRING,
            },
        }, {
            sequelize,
            underscored: false,
            tableName: 'Credential',
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        });
    }
}
exports.default = Credential;
