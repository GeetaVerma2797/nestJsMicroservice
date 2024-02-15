import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrdersDto } from './dto/create-orders.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
    @Get()
    async findAll(){
        return this.ordersService.findAll();
    }

    @Post()
    async create(@Body() createOrdersDto: CreateOrdersDto) {
        return this.ordersService.create(createOrdersDto);
    }}
