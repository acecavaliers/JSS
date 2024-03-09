
import { Module } from '@nestjs/common';
import { AppUserRoleServices } from './app-user-role.service';
import { AppUserRoleController } from './app-user-role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationRole } from './data/app-user-role.entity';
@Module({
    imports: [TypeOrmModule.forFeature([ApplicationRole])],
    controllers: [AppUserRoleController],
    providers: [AppUserRoleServices],

})
export class AppUserRoleModule {}
