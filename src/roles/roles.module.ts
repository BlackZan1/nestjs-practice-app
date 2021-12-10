import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// controllers
import { RolesController } from './roles.controller'

// services
import { RolesService } from './roles.service'

// modules
import { Role, RoleSchema } from './schemas/roles.schema'

@Module({
    controllers: [RolesController],
    providers: [RolesService],
    imports: [
        MongooseModule.forFeature([
            { name: Role.name, schema: RoleSchema }
        ])
    ]
})
export class RolesModule {}
