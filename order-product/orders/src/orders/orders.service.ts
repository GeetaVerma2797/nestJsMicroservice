import { Injectable } from '@nestjs/common';
import { Orders, OrdersDocument } from './schema/orders';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrdersDto } from './dto/create-orders.dto';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Orders.name) private OrdersModel: Model<OrdersDocument>) { }
    async create(createOrdersDto: CreateOrdersDto) {
      return await this.OrdersModel.findOneAndUpdate(
        {
          name: createOrdersDto.product_id,
          order_status: createOrdersDto.order_status,
          transaction_status: createOrdersDto.transaction_status,
          mrp: createOrdersDto.mrp
        },
        createOrdersDto,
        { new: true, upsert: true })
  
    }
  
    async findAll() {
        return await this.OrdersModel.aggregate([
            {
              $lookup: {
                from: "products",
                localField: "product_id",
                foreignField: "_id",
                as: "prodcuts_details"
              }
            }
        ]);  
    }
}
