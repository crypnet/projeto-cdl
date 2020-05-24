import { Users } from './../users.entity';
import { ApiProperty } from '@nestjs/swagger';
import {Column, CreatedAt, DeletedAt, IsEmail, Unique, UpdatedAt} from "sequelize-typescript";

export class UserDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    creationDate: Date;

    @ApiProperty()
    updatedOn: Date;

    @ApiProperty()
    deletionDate: Date;


    constructor(user: Users) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.creationDate = user.creationDate;
        this.updatedOn = user.updatedOn;
        this.deletionDate = user.deletionDate;
    }
}
