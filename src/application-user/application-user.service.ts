import { Injectable } from '@nestjs/common';


import { applicationUserDto,UpdateapplicationUserDto } from './data/application-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { applicationUser } from './data/application-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApplicationUserService {

    constructor(
        @InjectRepository(applicationUser)
        private readonly applicationUserRepository: Repository<applicationUser>,
    ){}
    
    
    
async create(dto: applicationUserDto){
        return this.applicationUserRepository.save(dto)
 }

async findall(){
    return await this.applicationUserRepository.find();
}

async findByID(id:string){
    return await this.applicationUserRepository.findOneByOrFail({id:id});
}
async update(id:string ,dto:UpdateapplicationUserDto){
    return await this.applicationUserRepository.update(id,dto);
}
async remove(id:string){
    return await this.applicationUserRepository.delete(id)

}


// async findOne( id: string){
//     return `This Action Return a #${id} cats`;s

// }


// async update (id: string){
//     return `This Action Updates a #${id} cat`;
// }

// async delete( id: string){
//     return `this Action Removes a #${id} cats `
// }



}
