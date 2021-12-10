import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// modules
import { FilesModule } from 'src/files/files.module'

// services
import { MusicsService } from 'src/musics/musics.service'

// controllers
import { MusicsController } from './musics.controller'

// models
import { Music, MusicSchema } from './schemas/musics.schema'

@Module({
    controllers: [MusicsController],
    providers: [MusicsService],
    imports: [
        MongooseModule.forFeature([
            { name: Music.name, schema: MusicSchema }
        ]),
        FilesModule
    ],
    exports: [
        MusicsService
    ]
})
export class MusicsModule {}