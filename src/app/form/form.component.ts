import { Component, OnInit } from '@angular/core';
import {ElsoSeviceService} from '../elso-sevice.service';
import {Login, MyAdat, Name} from '../my-adat';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service: ElsoSeviceService) { }
  data: MyAdat = new MyAdat();
  loginData: Login = new Login();
  nameData: Name = new Name();

  ngOnInit(): void {
  }

  generateRandom(): void{
    this.service.fetch().subscribe(
      (data: any) => this.service.adatom.push(data.results[0]),
      error => console.log(error),
      () => console.log('complete')
    );
  }

  save(): boolean{
    let modositott;
    if (!this.saveable()){
      alert('A név és a felhasználói mezők kitöltése kötelező!');
      return false;
    }

    for (let i = 0; i < this.service.adatom.length; i++){
      const l1 = this.service.adatom[i].login;
      if (this.loginData.same(l1)){
        alert('Ez a felhasználónév foglalt! Módosítom az adatokat');
        this.service.adatom.slice(i, 1);
        this.service.adatom[i] = this.data;
        this.service.adatom[i].login = this.loginData;
        this.service.adatom[i].name = this.nameData;

        this.data = new MyAdat();
        this.loginData = new Login();
        this.nameData = new Name();
        modositott = true;
        break;
      }
    }
    if (!modositott){
        this.data.name = this.nameData;
        this.data.login = this.loginData;

        this.service.adatom.push(this.data);
        this.data = new MyAdat();
        this.loginData = new Login();
        this.nameData = new Name();
    }

  }

  saveable(): boolean{
    if (this.loginData.username.length === 0 ||
      this.loginData.password.length === 0 ||
      this.nameData.first.length === 0 ||
      this.nameData.last.length === 0
      ) { return false; }
    return true;
  }


}
