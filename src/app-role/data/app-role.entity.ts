

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'application_roles'})
export class AppRole{
    @PrimaryGeneratedColumn('uuid',{name: 'application_roles_id'})
    id: string;

    @Column({name:'description'})
    description:string;

}