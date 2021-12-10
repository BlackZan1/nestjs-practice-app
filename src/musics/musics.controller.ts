import { Body, Controller, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from "@nestjs/common"
import { FileFieldsInterceptor } from "@nestjs/platform-express"

// dto
import { CreateMusicDto } from "./dto/create-music.dto"
import { MusicsParams } from "./dto/musics-params.dto"

// services
import { MusicsService } from "./musics.service"

@Controller('/api/musics')
export class MusicsController {
    constructor(
        private musicsService: MusicsService
    ) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'thumb', maxCount: 1 },
        { name: 'audio', maxCount: 1 }
    ]))
    createMusic(@UploadedFiles() files, @Body() createDto: CreateMusicDto) {
        const { audio, thumb } = files

        return this.musicsService.createMusic(createDto, audio[0], thumb[0])
    }

    @Get(':id')
    getMusic(@Param() params: MusicsParams) {
        return this.musicsService.getOne(params.id)
    }

    @Get()
    getMusics(@Query() query: any = { limit: 10, offset: 0 }) {
        return this.musicsService.getAll(query)
    }
}