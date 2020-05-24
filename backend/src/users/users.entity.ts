import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    AutoIncrement, IsUUID, IsEmail, Unique
} from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string;

    @Column
    name: string;

    @Unique
    @IsEmail
    @Column
    email: string;

    @Column
    password: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;
}