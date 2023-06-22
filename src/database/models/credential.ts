import { Model, Sequelize, DataTypes } from 'sequelize';
import { CredentialAttributes } from '../attributes';

class Credential extends Model implements CredentialAttributes {
    public id!: number;
    public ClientID!: string;
    public SecretKey!: string;

    static initModel(sequelize: Sequelize): void {
        Credential.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                ClientID: {
                    type: DataTypes.STRING,
                },
                SecretKey: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'Credential',
                timestamps: false,
                createdAt: false,
                updatedAt: false,
            }
        );
    }
}

export default Credential;
