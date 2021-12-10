import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema({ timestamps: true, versionKey: false })
export class Role {
    @Prop({ required: true })
    value: string

    @Prop({ default: null })
    description: string
}

export type RoleDocument = Role & Document
export const RoleSchema = SchemaFactory.createForClass(Role)