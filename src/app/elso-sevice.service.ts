import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login, MyAdat} from './my-adat';

@Injectable({
  providedIn: 'root'
})
export class ElsoSeviceService {

  public adatom: MyAdat[] = [];
  public loggedIn = false;

  constructor(private http: HttpClient) { }

  public fetch(): Observable<any> {
    return this.http.get('https://randomuser.me/api/');
  }

  public searchByLogin(login: Login): number{
    let i;
    for (i = 0; i < this.adatom.length; i++){
      const l1 = this.adatom[i].login;
      const azonos = l1.username === login.username;
      if (azonos){
        return i;
      }
    }
    return -1;
  }

  public logIn(loginData: Login): boolean{
    let i;
    for (i = 0; i < this.adatom.length; i++) {
      if (this.adatom[i].login.same(loginData)){
        alert('Sikeres belépés!');
        this.loggedIn = true;
        return true;
      }
    }
    if (loginData.username === 'admin' && loginData.password === 'admin'){
      alert('Sikeres belépés!');
      this.loggedIn = true;
      return true;
    }
    alert('Sikertelen bejelentkezés:\nHibás felhasználónév vagy jelszó!');
    this.loggedIn = false;
    return false;
  }
}
