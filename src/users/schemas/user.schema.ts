import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose"

// schemas
import { UserAlbum } from "./user-album.schema"

@Schema({ versionKey: false, timestamps: true })
export class User {
    @Prop({ auto: true, type: Types.ObjectId })
    id: number & string

    @Prop({ required: true })
    nickname: string

    @Prop({ required: true })
    email: string

    @Prop({ required: true })
    password: string

    @Prop({ default: false })
    isAdmin: boolean

    @Prop()
    avatar: string

    // @Prop({ default: 'user' })
    // role: string

    @Prop({ type: Types.ObjectId, ref: 'UserAlbum' })
    album: UserAlbum
}

export type UserDocument = User & Document
export const UserSchema = SchemaFactory.createForClass(User)