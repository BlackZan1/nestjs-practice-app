import { Body, Controller, HttpCode, Post, UploadedFiles, UseInterceptors } from "@nestjs/common"
import { FileFieldsInterceptor } from "@nestjs/platform-express"

// dto
import { CreateUserDto } from "src/users/dto/create-user.dto"
import { LoginUserDto } from "./dto/login-user.dto"

// services
import { AuthService } from "./auth.service"

@Controller('/api/auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('/login')
    login(@Body() loginDto: LoginUserDto) {
        return this.authService.login(loginDto)
    }

    @Post('/signup')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'avatar', maxCount: 1 }
    ]))
    @HttpCode(201)
    signup(@UploadedFiles() files, @Body() userDto: CreateUserDto) {
        console.log(files)

        const { avatar } = files

        return this.authService.signup(userDto, avatar[0])
    }
}