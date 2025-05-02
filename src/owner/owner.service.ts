import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnerDto } from 'src/dto/owner.dto';
import { Owner } from 'src/entities/owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnerService {
    constructor(
        @InjectRepository(Owner) private readonly ownerRepo:  Repository<Owner>
    ){}

    async create(owner: OwnerDto){
        return await this.ownerRepo.save(owner)
    }

    async findOne(id: number){
        const owner = await this.ownerRepo.findOne({ where: { id: id } });
        if (!owner) {
            throw new NotFoundException('Owner not Exist');
          }
        return owner
    }

    async get(){
        return this.ownerRepo.find()
    }
}
