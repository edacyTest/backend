import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { UserDto } from "./user.dto";
import { error } from "console";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>
    ){}

    async createUser(user: UserDto){
        return await this.userRepo.save(user);
    }

    async getUsers():Promise<User[]> {
        return await this.userRepo.find();
    }

    async getById(id: number) : Promise<UserDto>{
        return await this.userRepo.findOne({where: {id}})
    }

    async updateUser(id: number, userDto: UserDto){
        const user = await this.userRepo.findOne({where: {id}})
        if(!user){
            throw new NotFoundException("user not found")
        }
        Object.assign(user, userDto)
        await this.userRepo.save(user);
    }

    async removeUser(id: number){
        const user = await this.userRepo.findOne({where: {id}})
        if(!user){
            throw new NotFoundException("user not exist")
        }
        await this.userRepo.delete(id);
    }


}