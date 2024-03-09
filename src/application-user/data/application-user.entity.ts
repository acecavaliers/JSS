import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'application_user'})
export class applicationUser{
@PrimaryGeneratedColumn('uuid',{name: 'application_user_id'})
id: string;

@Column({name: 'first_name'})
firstName: string;

@Column({name:'middle_name'})
middleName: string;

@Column({name:'last_name'})
lastName: string;

@Column({name: 'age'})
age: number;

}