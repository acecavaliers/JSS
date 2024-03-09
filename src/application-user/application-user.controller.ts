import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { privateDecrypt } from 'crypto';
import { get } from 'http';
import { ApplicationUserService } from './application-user.service';
import { applicationUserDto,UpdateapplicationUserDto } from './data/application-user.dto';

@Controller('application-user')
export class ApplicationUserController {
constructor(
    private readonly applicatioonservice: ApplicationUserService){

}
@Post()
async Create(@Body()dto: applicationUserDto){
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
    @Body ()dto: UpdateapplicationUserDto,){
    return this.applicatioonservice.update(id,dto);
}



@Delete(':id')
async remove(@Param('id') id: string){
    return this.applicatioonservice.remove(id)
}
}
