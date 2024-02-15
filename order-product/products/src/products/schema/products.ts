import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductsDocument = Products & Document;

@Schema()
export class Products {
 

    @Prop({ required: true, default: 1 })
    "name": string;

    @Prop({ required: true, type: {} })
    "mrp": number;

    @Prop({ required: true })
    "stock": number;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);