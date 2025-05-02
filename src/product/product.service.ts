import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dto/product.dto';
import { Owner } from 'src/entities/owner.entity';
import { Product } from 'src/entities/product.entity';
import { OwnerService } from 'src/owner/owner.service';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)  private readonly productRepo : Repository<Product>,
        private readonly ownerService: OwnerService,
    ){}

    async create(productDto: ProductDto){
        const owner = await this.ownerService.findOne(productDto.ownerId);
        if (!owner) {
            throw new Error('Owner not found');
          }
          const product = this.productRepo.create({
            name: productDto.name,
            price: productDto.price,
            owner: owner,
          });
        return await this.productRepo.save(product)
    }

    async get(){
        return this.productRepo.find();
    //     return (await products).map((product) => ({
    //         id: product.id,
    //         name: product.name,
    //         price: product.price,
    //         ownerId: product.ownerId, // Inclut ownerId dans la réponse
    //       }));
   }
}
