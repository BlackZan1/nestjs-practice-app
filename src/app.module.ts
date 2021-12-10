import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { MongooseModule } from "@nestjs/mongoose"
import * as path from 'path'

// controllers
import { AppController } from "./app.controller"

// services
import { AppService } from "./app.service"

// modules
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { MusicsModule } from './musics/musics.module'
import { FilesModule } from './files/files.module'
import { ServeStaticModule } from "@nestjs/serve-static"
import { RolesModule } from './roles/roles.module'
import { PlaylistsModule } from './playlists/playlists.module';

@Module({
    controllers: [AppController],
    // controllers: [],
    providers: [AppService],
    // providers: [],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        MongooseModule.forRoot(
            process.env.MONGO_URI, 
            { useNewUrlParser: true, useUnifiedTopology: true }
        ),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static')
        }),
        UsersModule,
        AuthModule,
        MusicsModule,
        FilesModule,
        RolesModule,
        PlaylistsModule
    ]
})
export class AppModule {}