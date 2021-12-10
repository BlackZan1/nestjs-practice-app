import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// modules
import { FilesModule } from 'src/files/files.module'
import { MusicsModule } from 'src/musics/musics.module'

// controllers
import { PlaylistsController } from './playlists.controller'

// services
import { PlaylistsService } from './playlists.service'

// models
import { Playlist, PlaylistSchema } from './schemas/playlist.schema'

@Module({
    controllers: [PlaylistsController],
    providers: [PlaylistsService],
    imports: [
        MongooseModule.forFeature([
            { name: Playlist.name, schema: PlaylistSchema }
        ]),
        FilesModule,
        MusicsModule
    ]
})
export class PlaylistsModule {}
