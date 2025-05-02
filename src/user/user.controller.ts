import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";
import { User } from "src/entities/user.entity";
// import { AuthGuard } from "src/auth/authGard/authGard";
// import { Roles } from "src/auth/roles/roles.docorater";
// import { Role } from "src/auth/roles/roles.enum";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

// @UseGuards(AuthGuard)
@ApiTags('user')
@Controller('user')
export class UserController{
    constructor(private service: UserService){}

    @Post()
    @ApiResponse({ status: 200 })
    async create(@Body() user: UserDto){
        this.service.createUser(user)
    }

    
    @Get()
    @ApiResponse({ status: 200, description: 'List of products', type: [UserDto] })
    async getUsers(): Promise<User[]>{
        return this.service.getUsers();
    }

    @Get(':id')
    @ApiResponse({ status: 200 })
    async getById(@Param('id') id: number){
        return await this.service.getById(id);
    }

    @Put(':id')
    @ApiResponse({ status: 200 })
    async updateUser(@Param('id') id: number, @Body() userDto: UserDto){
        return await this.service.updateUser(id, userDto)
    }

    // @Roles(Role.Admin)
    @Delete(':id')
    @ApiResponse({ status: 200 })
    async removeUser(@Param('id') id: number){
        return await this.service.removeUser(id)
    }
}