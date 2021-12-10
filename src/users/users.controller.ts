import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common'

// dto
import { CreateUserDto } from './dto/create-user.dto'

// services
import { UsersService } from './users.service'

// guards
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('/api/users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    signup(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto, '')
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    get(@Query() query: any = { limit: 10, offset: 0 }) {
        console.log(query)

        return this.usersService.getUsers(query)
    }
}
