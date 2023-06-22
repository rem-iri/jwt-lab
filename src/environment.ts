import * as dotenv from 'dotenv';

dotenv.config();

export default {
    APP_PORT: process.env.APP_PORT ?? '5555',
    APP_ENVIRONMENT: process.env.APP_ENVIRONMENT ?? 'local',
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_SCHEMA: process.env.DB_SCHEMA,
    DB_DIALECT: process.env.DB_DIALECT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
};
