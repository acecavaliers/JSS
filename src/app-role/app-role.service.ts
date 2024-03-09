import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { AppRole } from './data/app-role.entity';
import { Repository } from 'typeorm';
import { CreateAppRoleDto } from './data/app-role.dto';

@Injectable()
export class AppRoleService {

    constructor(
        @InjectRepository(AppRole)
        private readonly applicationUserRepository: Repository<AppRole>,
    ){}
        
    
async create(dto: CreateAppRoleDto){
        return this.applicationUserRepository.save(dto)
}

async findall(){
    return await this.applicationUserRepository.find();
}

async findByID(id:string){
    return await this.applicationUserRepository.findOneByOrFail({id:id});
}
async update(id:string ,dto:CreateAppRoleDto){
    return await this.applicationUserRepository.update(id,dto);
}
async remove(id:string){
    return await this.applicationUserRepository.delete(id)

}



}
