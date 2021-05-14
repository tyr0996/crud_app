import { Component, OnInit } from '@angular/core';
import {Login} from '../my-adat';
import {ElsoSeviceService} from '../elso-sevice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ElsoSeviceService, private router: Router) { }

  loginData: Login = new Login();

  logIn(): boolean{
    if (this.service.logIn(this.loginData)){
      this.router.navigate(['list']);
      return true;
    }
    return false;
  }

  ngOnInit(): void {
  }

}
