export class CreatePlaylistDto {
    name: string
    isPublic: boolean
    musics: any[]
    owner?: any
    thumb: string
}