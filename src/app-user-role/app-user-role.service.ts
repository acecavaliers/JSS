import { InjectRepository } from "@nestjs/typeorm";
import { ApplicationRole } from "./data/app-user-role.entity";
import { Repository } from "typeorm";
import { AppUserRoleDto } from "./data/app-user-role.dto";

export class AppUserRoleServices{
    constructor(
        @InjectRepository(ApplicationRole)
        private readonly appUserRoleRepository:Repository<ApplicationRole>
    ){}

        
async create(dto: AppUserRoleDto){
    return this.appUserRoleRepository.save(dto)
}

async findall(){
return await this.appUserRoleRepository.find({
    relations:{applicationuser:true, AppRole:true},
    select:{
        applicationuser:{
            firstName:true
        },
        AppRole:{
            description:true
        },
        isActive:true
    }

    });
}

async findByID(id:string){
return await this.appUserRoleRepository.findOneByOrFail({id:id});
}
async update(id:string ,dto:AppUserRoleDto){
return await this.appUserRoleRepository.update(id,dto);
}
async remove(id:string){
return await this.appUserRoleRepository.delete(id)

}
}