 
import { UserStore } from '../../../../core/user/services/user.store';
 
export abstract class ChangePasswordBase   {

  constructor(public userStore: UserStore) { }
   

}
