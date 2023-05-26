import { ConfigModule } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import * as mysqlDriver from 'mysql2';

ConfigModule.forRoot();
export const dataSourceOptions: DataSourceOptions = {
    driver: mysqlDriver,
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: true, //Esta opcion debe estar en false cuando se pasa el proyecto a produccion y se deben utilizar las migraciones
    entities: ["dist/Infrastructure/framework/db/models/*.models.js"],
    migrations: ['dist/Infrastructure/framework/config/migrations/*.js'],
};
const datasource = new DataSource(dataSourceOptions);
export default datasource