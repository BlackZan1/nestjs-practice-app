import { HttpCode, HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

// services
import { FilesService, FileType } from "src/files/files.service"

// dto
import { CreateMusicDto } from "./dto/create-music.dto"

// models
import { Music, MusicDocument } from "./schemas/musics.schema"

@Injectable()
export class MusicsService {
    constructor(
        private filesService: FilesService,
        @InjectModel(Music.name) private musicModel: Model<MusicDocument>
    ) {}

    async createMusic(dto: CreateMusicDto, audio, thumb) {
        console.log(audio, thumb)

        if(audio) {
            const audioUrl = await this.filesService.createFile(FileType.AUDIO, audio)

            dto.music = audioUrl
        }

        if(thumb) {
            const thumbUrl = await this.filesService.createFile(FileType.IMAGE, thumb)

            dto.thumb = thumbUrl
        }

        return await new this.musicModel(dto).save()
    }

    async getOne(id: string) {
        try {
            return await this.musicModel.findById(id)
        }
        catch(err) {
            console.log(err)

            throw new HttpException({ message: 'There is not object with provided ID' }, HttpStatus.BAD_REQUEST)
        }
    }

    async getAll(query: any) {
        let filter: any = {}
        let options: any = {}
        
        // queries
        if(query.search) filter.$text.$search = query.search

        // options
        if(query.limit) options.limit = +query.limit
        if(query.offset) options.skip = +query.offset

        return await this.musicModel.find(filter, {}, options).exec()
    }
}