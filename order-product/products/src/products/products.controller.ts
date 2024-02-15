import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
    @Get()
    async findAll(){
        return this.productsService.findAll();
    }

    @Post()
    async create(@Body() createProductsDto: CreateProductsDto) {
        return this.productsService.create(createProductsDto);
    }
}
