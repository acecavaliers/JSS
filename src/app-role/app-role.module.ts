import { Module } from "@nestjs/common";
import { AppRoleController } from "./app-role.controller";
import { AppRoleService } from "./app-role.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppRole } from "./data/app-role.entity";


@Module({
    imports:[TypeOrmModule.forFeature([AppRole])], //from Entity
    controllers:[AppRoleController],
    providers:[AppRoleService]

})

export class AppRoleModule{}