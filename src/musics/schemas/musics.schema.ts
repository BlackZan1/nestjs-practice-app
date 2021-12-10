import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema({ timestamps: true, versionKey: false })
export class Music {
    @Prop({ auto: true, type: Types.ObjectId })
    _id: number & string

    @Prop({ required: true })
    title: string

    @Prop({ required: true })
    music: string

    @Prop({ required: true })
    thumb: string

    @Prop()
    author: string
}

export type MusicDocument = Music & Document
export const MusicSchema = SchemaFactory.createForClass(Music)

// MusicSchema.virtual('id').get(function() {
//     return this._id.toHexString()
// })