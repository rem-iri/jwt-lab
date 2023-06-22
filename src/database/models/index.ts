import SequelizeConnection from '../configuration';
// import Department from './department';
import Employee from './employee';
import Product from './product';
import QueryHandling from './queryHandling';
import Credential from './credential';

const sequelize = SequelizeConnection.getInstance();

// Initialize Models
// Department.initModel(sequelize);
Employee.initModel(sequelize);
Product.initModel(sequelize);
QueryHandling.initModel(sequelize);
Credential.initModel(sequelize);

export const db = {
    sequelize,
    // Department,
    Employee,
    Product,
    QueryHandling,
    Credential,
};
