import { Requests } from '../types/requests';
import { User } from '../types/user';

export class UserStoreState {
  user: User = null;
  redirectUrl: string = null;
  requests: Requests = {
    login: {},
    logout: {},
    forgotPassword: {},
    register: {},
    resetPassword: {},
    validateResetPwdToken: {},
    changePassword: {},
    registerGames: {}

  };
}
