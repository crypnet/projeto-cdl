import {ApiProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class UpdateUserDto {

    @ApiProperty()
    @IsString()
    readonly password: string;

    @ApiProperty()
    @IsString()
    readonly name: string;
}
