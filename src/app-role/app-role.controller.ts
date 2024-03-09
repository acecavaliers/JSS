import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { AppRoleService } from './app-role.service';
import { CreateAppRoleDto } from './data/app-role.dto';

@Controller('app-role')
export class AppRoleController {
constructor(
    private readonly applicatioonservice: AppRoleService){

}
@Post()
async Create(@Body() dto: CreateAppRoleDto){
return this.applicatioonservice.create(dto)
}

@Get()
async finall(){
    return this.applicatioonservice.findall();
}


@Get(':id')
async finOne(@Param('id') id: string){
    return  await this.applicatioonservice.findByID(id);
}



@Put(':id')
async update(@Param('id') id: string,
    @Body() dto: CreateAppRoleDto){
    return this.applicatioonservice.update(id,dto);
}



@Delete(':id')
async remove(@Param('id') id: string){
    return this.applicatioonservice.remove(id)
}
}
