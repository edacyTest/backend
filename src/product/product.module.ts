import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from 'src/entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerModule } from 'src/owner/owner.module';

@Module({
  imports:[TypeOrmModule.forFeature([Product]), OwnerModule],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
