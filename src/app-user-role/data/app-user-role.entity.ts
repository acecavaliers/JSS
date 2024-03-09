import { AppRole } from "src/app-role/data/app-role.entity";
import { applicationUser } from "src/application-user/data/application-user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'application_user_roles'})
export class ApplicationRole{
    @PrimaryGeneratedColumn('uuid',{name:'application_user_roles_id'})
    id:string;
    
    @ManyToOne(() => applicationUser,(applicationUser)=> applicationUser.id)
    @JoinColumn({name:'application_user_id_fk'})
    applicationuser: applicationUser;

    @ManyToOne(()=>AppRole,(AppuserRole)=> AppuserRole.id)
    @JoinColumn({name:'application_role_id_fk'})
    AppRole: AppRole;

    @Column({name: 'is_active', type:'boolean'})
    isActive: boolean;
}