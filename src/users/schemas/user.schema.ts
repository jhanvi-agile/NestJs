import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema({ collection: 'users', timestamps: true })
export class Users {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    gender: string;

    @Prop({ required: true, unique: true, index: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, default: false })
    isActive: boolean;

    @Prop({required:false,default:false})
    profileUrl : string;

    @Prop({required:true,default:false})
    type : string[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);