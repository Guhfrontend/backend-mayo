import { IsEmail, IsString, IsStrongPassword, Length } from "class-validator";

export class CreateUserDto {

    @IsString()
    @Length(3, 20)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @Length(8, 20)
    password: string;
}
