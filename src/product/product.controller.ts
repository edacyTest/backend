import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from 'src/dto/product.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Post("create")
    @ApiResponse({ status: 200})
    async create(@Body() product: ProductDto){
        return this.productService.create(product)
    }

    @Get()
    @ApiResponse({ status: 200, description: 'List of products', type: [ProductDto] })
    async get(){
        return await this.productService.get()
    }
}
