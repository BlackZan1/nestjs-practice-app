import { Body, Controller, Get, Post, Query, UploadedFiles, UseInterceptors } from "@nestjs/common"
import { FileFieldsInterceptor } from "@nestjs/platform-express"

// dto
import { CreatePlaylistDto } from "./dto/create-playlist.dto"

// services
import { PlaylistsService } from "./playlists.service"

@Controller('api/playlists')
export class PlaylistsController {
    constructor(
        private playlistService: PlaylistsService
    ) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'thumb', maxCount: 1 }
    ]))
    createPlaylist(@UploadedFiles() files, @Body() createDto: CreatePlaylistDto) {
        const { thumb } = files

        return this.playlistService.createPlaylist(createDto, thumb[0])
    }

    @Get()
    getPlaylists(@Query() query: any = { limit: 10, offset: 0 }) {
        return this.playlistService.getAll(query)
    }

    @Post('/addMusic')
    updatePlaylists(@Body() dto: any) {
        console.log(dto)

        return this.playlistService.addMusic(dto)
    }
}