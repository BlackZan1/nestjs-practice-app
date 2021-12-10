import { Controller, Get } from "@nestjs/common"

// services
import { AppService } from "./app.service"

@Controller('/api')
export class AppController {
    constructor(private appService: AppService) {}

    @Get('/demo/musics')
    getMusic() {
        return this.appService.getMusic()
    }

    @Get('/demo/playlists')
    getPlaylists() {
        return this.appService.getPlaylists()
    }
}