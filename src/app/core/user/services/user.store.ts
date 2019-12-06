import { Injectable } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UserEndpoint } from './user.endpoint';
import { UserStoreState } from './user.store.state';

import { User } from '../types/user';
import { Login } from '../types/login';
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';
import { UserAction } from '../../../core/user/user.constants';



@Injectable()
export class UserStore extends Store<UserStoreState> {
  user$: Observable<User>;
  private storeRequestStateUpdater: StoreRequestStateUpdater;

  constructor(private endpoint: UserEndpoint) {
    super(new UserStoreState());

    this.user$ = this.state$.pipe(map(state => state.user));
    this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
      this
    );
  }

 

  //requestState(requestName: string): RequestState {
  //  return this.state.requests[requestName];
  //}
 
  updateAuthStateOnReloadPage() {

    if (this.isLogin()) {
      this.setState({
        ...this.state,
        user: this.endpoint.getLocalUserInfo(),
      });
    }
  }

  isLogin(): boolean {

    if (this.state.user || this.endpoint.getLocalUserInfo()) {//TODO add if not yet expired
      return true;
    }
     
    return false;
  }

  setRedirectUrl(url: string): void {
    this.state.redirectUrl = url;
  }

  getRedirectUrl(): string {
    return this.state.redirectUrl;
  }

 registerGames(): Observable<string> {
      return this.endpoint.registerGames( this.storeRequestStateUpdater);
  }


  submitUserAction(d: any, action: UserAction): Observable<User> {
    let request$: Observable<User>;
    if (action == UserAction.Login) {

      const requestOptions = <Login>d;
      request$ = this.endpoint.login(d, this.storeRequestStateUpdater);
      return request$.pipe(
        tap((user: User) => {
          this.handleGetUserResponse(user);
          if (!this.state.requests.login.error) {
              this.endpoint.setLocalUserInfo(requestOptions.IsRemember, user);
          }
        })
      );
    }
    else if (action == UserAction.Logout) {
      request$ = this.endpoint.logout(this.storeRequestStateUpdater);
      return request$.pipe(
        tap((user: User) => {
          this.handleGetUserResponse(user);
          if (!this.state.requests.login.error) {
            this.endpoint.clearLocalUserInfo();
          }
        })
      );
    }
    else if (action == UserAction.ForgotPassword) {
      request$ = this.endpoint.forgotPassword(d, this.storeRequestStateUpdater);
    }
    else if (action == UserAction.Register) {
      request$ = this.endpoint.register(d, this.storeRequestStateUpdater);
    }

    else if (action == UserAction.ResetPassword) { 
      request$ = this.endpoint.resetPassword(d, this.storeRequestStateUpdater);
    }
    else if (action == UserAction.ChangePassword) {
      request$ = this.endpoint.changePassword(d, this.storeRequestStateUpdater);
    }

    return request$.pipe(
      tap((user: User) => {
        this.handleGetUserResponse(user);
      })
    );
   
  }
    
  private handleGetUserResponse(user: User): void {
    this.setState({
      ...this.state,
      user: user,
    });

    //TODO add error handling, do not prompt if login, default is prompt error message
  }

  validateResetPwdToken(d: string): Observable<void> {
 
    return this.endpoint.validateResetPwdToken(d, this.storeRequestStateUpdater);

  }
}
