import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose"

// models
import { User } from "./user.schema"
import { Music } from "src/musics/schemas/musics.schema"

@Schema({ versionKey: false, timestamps: true })
export class UserAlbum {
    @Prop({ default: [] })
    playlists: []

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Music' }], default: [] })
    musics: Music[]

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Music' }], default: [] })
    favourites: Music[]

    @Prop({ type: Types.ObjectId, ref: 'User' })
    owner: User
}

export const UserAlbumSchema = SchemaFactory.createForClass(UserAlbum)
export type UserAlbumDocument = UserAlbum & Document