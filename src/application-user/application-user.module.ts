import { Module } from '@nestjs/common';
import { ApplicationUserController } from './application-user.controller';
import { ApplicationUserService } from './application-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { applicationUser } from './data/application-user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([applicationUser])],
    controllers: [ApplicationUserController],
    providers: [ApplicationUserService],

})
export class ApplicationUserModule {}
