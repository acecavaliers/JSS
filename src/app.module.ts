import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { ApplicationUserModule } from './application-user/application-user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppRoleModule } from './app-role/app-role.module';
import { AppUserRoleModule } from './app-user-role/app-user-role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.16.10.125',
      port: 3306,
      username: 'root',
      password: 'p@ssw0rd',
      database:'test_db',
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
    }),
  ApplicationUserModule,
  AppRoleModule,
  AppUserRoleModule,

  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
