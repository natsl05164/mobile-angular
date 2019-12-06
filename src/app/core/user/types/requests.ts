import { RequestState } from '../../../shared/types/request-state';

export interface Requests {
  login: RequestState;
  logout: RequestState;
  forgotPassword: RequestState;
  register: RequestState;
  validateResetPwdToken: RequestState;
  resetPassword: RequestState;
    changePassword: RequestState; 
    registerGames: RequestState; 
}
