import { Injectable } from '@angular/core';
import { UserVO } from '../model/UserVO';
import { Config } from '../model/Config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private userData: UserVO;
  private configData: Config;

  setUserData(userData: UserVO) {
    localStorage.setItem('userData', btoa(JSON.stringify(userData)));
  }

  getUserData(): UserVO {
    return JSON.parse(atob(localStorage.getItem('userData')));
  }

  setConfigData(configData: Config) {
    localStorage.setItem('configData', btoa(JSON.stringify(configData)));
  }

  getConfigData(): Config {
    return JSON.parse(atob(localStorage.getItem('configData')));
  }
}
