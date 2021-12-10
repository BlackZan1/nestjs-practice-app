import { forwardRef, Module } from '@nestjs/common'

// controllers
import { AuthController } from './auth.controller'

// services
import { AuthService } from './auth.service'
import { FilesService } from 'src/files/files.service'

// modules
import { UsersModule } from 'src/users/users.module'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'

@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        FilesService
    ],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: process.env.APP_SECRET,
            signOptions: {
                expiresIn: '24h'
            }
        })
    ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}
