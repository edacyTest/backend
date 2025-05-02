import { Body, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAuthService } from 'src/auth/user-auth/user-auth.service';

@Injectable()
export class AuthService {
    constructor(
        private uaService : UserAuthService,
        private jwtService: JwtService
    ){}
    async signIn(username: string, password: string){
        const user = await this.uaService.findOne(username);
        if(!user){
            throw new NotFoundException('user not exist')
        }
        else{
            if(user.uaPassword !== password){
                throw new NotFoundException('incorrect password')
                // throw new UnauthorizedException();
            }
            else{
                const {uaPassword, ...result} = user
                const payload = {
                    sud: user.id,
                    username: user.uaName
                }
                 // TODO : Générer un JWT et le renvoyer ici
                // au lieu de l'objet utilisateur
                return {access_token : await this.jwtService.signAsync(payload), data: result}
            }
        }
    }
}
