import { IsString } from "class-validator"

export class CreateMusicDto {
    @IsString({ message: 'Must be a string' })
    readonly title: string

    @IsString({ message: 'Must be a string' })
    readonly author: string

    music?: string
    thumb?: string
}