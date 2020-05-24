import { UserDto } from './user.dto';
import { ApiProperty } from '@nestjs/swagger';
import {Users} from "../users.entity";

export class UserLoginResponseDto extends UserDto {
    @ApiProperty()
    token: string;

    constructor(user: Users, token?: string) {
        super(user);
        this.token = token;
    }
}
