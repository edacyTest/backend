import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth') // Groupe pour Swagger
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    
    @Post('login')
    @ApiResponse({status:200})
    signIn(@Body() signInDto: Record<string, any>){
        return this.authService.signIn(signInDto.uaName, signInDto.uaPassword)
    }
}
