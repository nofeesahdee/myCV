import { Expose } from "class-transformer";
import { IsEmail,IsString } from "class-validator";

export class UserDto{

    @Expose()
    email: string;

    @Expose()
    password: string
}