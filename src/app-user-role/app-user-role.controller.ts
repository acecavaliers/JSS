import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppUserRoleServices } from "./app-user-role.service";
import { AppUserRoleDto } from "./data/app-user-role.dto";


@Controller('app-user-role-controller')
export class AppUserRoleController{
    constructor(
        private readonly applicatioonservice: AppUserRoleServices){
    
    }
    @Post()
    async Create(@Body()dto: AppUserRoleDto){
    return this.applicatioonservice.create(dto)
    }

    @Get()
    async finall(){
        return this.applicatioonservice.findall();
        // return []
    }
}