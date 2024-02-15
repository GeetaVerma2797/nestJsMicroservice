import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrdersDocument = Orders & Document;

@Schema()
export class Orders {
 

    @Prop({ required: true, default: 1 })
    "product_id": number;

    @Prop({ required: true, type: {} })
    "order_status": string;

    @Prop({ required: true })
    "transaction_status": string;

    @Prop({ required: true })
    "mrp": number;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);