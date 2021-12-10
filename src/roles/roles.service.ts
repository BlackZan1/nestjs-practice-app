import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

// dto
import { CreateRoleDto } from "./dto/create-role.dto"
import { Role, RoleDocument } from "./schemas/roles.schema"

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

    async createRole(dto: CreateRoleDto) {
        return await new this.roleModel(dto).save()
    }
}