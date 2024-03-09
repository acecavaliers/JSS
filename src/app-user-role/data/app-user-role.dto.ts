import { applicationUser } from 'src/application-user/data/application-user.entity';
import { AppRole } from 'src/app-role/data/app-role.entity';

export class AppUserRoleDto{
    applicationuser:applicationUser;
    approles:AppRole;
    isActive:boolean
}