import { Body, Controller, Get, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { get } from 'http';
import { OwnerDto } from 'src/dto/owner.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('owner')
@Controller('owner')
export class OwnerController {
    constructor(private readonly ownerService: OwnerService){}

    @Post('create')
    @ApiResponse({ status: 200, description: '' })
    async create(@Body() owner: OwnerDto){
         this.ownerService.create(owner)
    }

    @Get()
    @ApiResponse({ status: 200, description: 'List of products', type: [OwnerDto] })
    async get(){
        return this.ownerService.get()
    }
}
