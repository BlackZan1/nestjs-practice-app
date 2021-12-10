import { IsEmail, IsString, Length } from "class-validator"

export class LoginUserDto {
    @IsString({ message: 'Must be a string' })
    @IsEmail({}, { message: 'Invalid email' })
    readonly email: string

    @IsString({ message: 'Must be a string' })
    @Length(8, 32, { message: 'Must be more 8 and less 32 symbols' })
    readonly password: string
}