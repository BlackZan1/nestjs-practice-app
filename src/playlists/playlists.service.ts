import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

// services
import { FilesService, FileType } from "src/files/files.service"
import { MusicsService } from "src/musics/musics.service"

// dto
import { CreatePlaylistDto } from "./dto/create-playlist.dto"

// models
import { Playlist, PlaylistDocument } from "./schemas/playlist.schema"

@Injectable()
export class PlaylistsService {
    constructor(
        @InjectModel(Playlist.name) private playlistModel: Model<PlaylistDocument>,
        private filesService: FilesService,
        private musicsService: MusicsService,
    ) {}

    async createPlaylist(dto: CreatePlaylistDto, thumb): Promise<Playlist> {
        if(thumb) {
            const thumbUrl = await this.filesService.createFile(FileType.IMAGE, thumb)

            dto.thumb = thumbUrl
        }

        return await new this.playlistModel(dto).save()
    }

    async getAll(query: any) {
        let filter: any = {}
        let options: any = {}
        
        // queries
        if(query.search) {
            filter.$text = { $search: query.search }
        }

        // options
        if(query.limit) options.limit = +query.limit
        if(query.offset) options.skip = +query.offset

        return await this.playlistModel.find(filter, {}, options).populate('musics').exec()
    }

    async addMusic(dto: any) {
        const playlist = await this.playlistModel.findById(dto.playlistId)
        const music = await this.musicsService.getOne(dto.musicId)

        if(!playlist) throw new HttpException({ message: 'Playlist is not found' }, HttpStatus.NOT_FOUND)
        if(!music) throw new HttpException({ message: 'Music item is not found' }, HttpStatus.NOT_FOUND)

        if(playlist.musics.some(i => i._id === music._id)) throw new HttpException({ message: 'Music item is already in playlist' }, HttpStatus.BAD_REQUEST)

        playlist.musics.push(music._id)

        return await playlist.save()
    }
}