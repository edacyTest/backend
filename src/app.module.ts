import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserAuthModule } from './auth/user-auth/user-auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles/roles.gard';
import { OwnerService } from './owner/owner.service';
import { OwnerController } from './owner/owner.controller';
import { OwnerModule } from './owner/owner.module';
import { Owner } from './entities/owner.entity';
import { ProductModule } from './product/product.module';
import { Product } from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'demo',
      entities: [User, Owner, Product],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    OwnerModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
