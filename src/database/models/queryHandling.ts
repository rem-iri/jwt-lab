import { Model, Sequelize, DataTypes } from 'sequelize';
import { QueryHandlingAttributes } from '../attributes';
import Employee from './employee';

class QueryHandling extends Model implements QueryHandlingAttributes {
    QID!: string;
    Sub_Date!: Date;
    Cust_ID!: string;
    EmpID!: string;
    Res_Date!: Date;
    Status!: string;
    Feedback!: number;
    Query_Text!: string;
    Query_Response!: string;

    static initModel(sequelize: Sequelize): void {
        QueryHandling.init(
            {
                QID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: true,
                },
                Sub_Date: {
                    type: DataTypes.DATE,
                },
                Cust_ID: {
                    type: DataTypes.STRING,
                },
                EmpID: {
                    type: DataTypes.STRING,
                },
                Res_Date: {
                    type: DataTypes.DATE,
                },
                Status: {
                    type: DataTypes.STRING,
                },
                Feedback: {
                    type: DataTypes.INTEGER,
                },
                Query_Text: {
                    type: DataTypes.STRING,
                },
                Query_Response: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'QueryHandling',
                timestamps: false,
                createdAt: false,
                updatedAt: false,
            }
        );
    }
}

export default QueryHandling;
