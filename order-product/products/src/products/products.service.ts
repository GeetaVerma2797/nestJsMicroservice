import { Injectable } from '@nestjs/common';
import { Products, ProductsDocument } from './schema/products';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductsDto } from './dto/create-products.dto';


@Injectable()
export class ProductsService {
    constructor(@InjectModel(Products.name) private ProdcutsModel: Model<ProductsDocument>) { }
    async create(CreateProductsDto: CreateProductsDto) {
      return await this.ProdcutsModel.findOneAndUpdate(
        {
          name: CreateProductsDto.name,
          mrp: CreateProductsDto.mrp,
          stock: CreateProductsDto.stock
        },
        CreateProductsDto,
        { new: true, upsert: true })
  
    }
  
    async findAll() {
        return await this.ProdcutsModel.find();
    }
}
