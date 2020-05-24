import { Sequelize } from 'sequelize-typescript';
import {Users} from "../users/users.entity";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Pa$$w0rd',
                database: 'cdl',
            });
            sequelize.addModels([Users]);
            await sequelize.sync();
            return sequelize;
        },
    },
];