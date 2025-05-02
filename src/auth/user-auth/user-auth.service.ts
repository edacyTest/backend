import { Injectable } from '@nestjs/common';

@Injectable()
export class UserAuthService {
    private readonly users = [
        {
            id: 1,
            uaName: 'Malick',
            uaPassword: '1805',
            roles: [
                'admin'
            ]
        },
        {
            id:2,
            uaName: 'Charles',
            uaPassword: '1805',
            roles:[
                'user'
            ]
        },
    ]

    async findOne(uaName : string){
        return this.users.find(user => user.uaName === uaName )
    }
}