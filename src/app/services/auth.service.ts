import { Injectable } from '@angular/core';
import { UserVO } from '../model/UserVO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private userData: UserVO;

  setUserData(userData: UserVO) {
    localStorage.setItem('userData', btoa(JSON.stringify(userData)));
  }

  getUserData(): UserVO {
    return JSON.parse(atob(localStorage.getItem('userData')));
  }
}
