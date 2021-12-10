import { Controller, Post } from "@nestjs/common"

// dto
import { CreateRoleDto } from "./dto/create-role.dto"

// services
import { RolesService } from "./roles.service"

@Controller('api/roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @Post()
    // @UseGuards
    createRole(postDto: CreateRoleDto) {
        return this.rolesService.createRole(postDto)
    }
}