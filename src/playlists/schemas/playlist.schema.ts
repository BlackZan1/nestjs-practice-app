import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose"

// schemas
import { Music } from "src/musics/schemas/musics.schema"

@Schema({ timestamps: true, versionKey: false })
export class Playlist {
    @Prop({ required: true })
    name: string

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Music' }] })
    musics: Music[]

    @Prop({ required: true })
    thumb: string

    @Prop({ required: true })
    isPublic: boolean
}

export type PlaylistDocument = Playlist & Document
export const PlaylistSchema = SchemaFactory.createForClass(Playlist)