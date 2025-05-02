import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserAuthModule } from 'src/auth/user-auth/user-auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constant';

@Module({
  imports: [
    UserAuthModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
