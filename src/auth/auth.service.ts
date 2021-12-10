import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"

// services
import { UsersService } from "src/users/users.service"

// dto
import { CreateUserDto } from "src/users/dto/create-user.dto"
import { LoginUserDto } from "./dto/login-user.dto"

// utils
import { compare, hash } from "utils/crypto"

// models
import { User } from "src/users/schemas/user.schema"

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async login(dto: LoginUserDto) {
        const user = await this.validateUser(dto)

        return this.generateToken(user)
    }

    async signup(dto: CreateUserDto, avatar) {
        const candidate = await this.usersService.getUserByEmail(dto.email)

        if(candidate) throw new HttpException('User with similar email is already exist', HttpStatus.BAD_REQUEST)

        const hashPassword = await hash(dto.password)
        const user = await this.usersService.createUser({ ...dto, password: hashPassword }, avatar)

        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {
            email: user.email,
            id: user.id,
            isAdmin: user.isAdmin
        }

        return {
            message: `Welcome, ${user.email}!`,
            jwt: this.jwtService.sign(payload)
        }
    }

    private async validateUser(dto: LoginUserDto) {
        const user = await this.usersService.getUserByEmail(dto.email)
        const passwordEquals = await compare(dto.password, user.password)

        if(user && passwordEquals) return user

        throw new UnauthorizedException({ message: 'Wrong email or password' })
    }
}