import { forwardRef, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// modules
import { AuthModule } from 'src/auth/auth.module'

// controllers
import { UsersController } from 'src/users/users.controller'

// services
import { UsersService } from 'src/users/users.service'
import { FilesService } from 'src/files/files.service'

// models
import { User, UserSchema } from './schemas/user.schema'
import { UserAlbum, UserAlbumSchema } from './schemas/user-album.schema'

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    FilesService
  ],
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: UserAlbum.name, schema: UserAlbumSchema }
    ]),
    AuthModule
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
