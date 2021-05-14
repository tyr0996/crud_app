import { Component, OnInit } from '@angular/core';
import {ElsoSeviceService} from '../elso-sevice.service';
import {Login} from '../my-adat';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public service: ElsoSeviceService, private router: Router) {  }

  ngOnInit(): void {
    if (this.service.adatom.length === 0){
      this.service.fetch().subscribe(
        (data: any) => this.service.adatom = data.results,
        error => console.log(error),
        () => console.log('complete')
      );
    }
  }

  delete(adat: any): void {
    for (let i = 0; i < this.service.adatom.length; i++){
      if (i !== this.service.adatom.length &&
        this.service.adatom[i].name.title === adat.name.title &&
        this.service.adatom[i].name.first === adat.name.first &&
        this.service.adatom[i].name.last === adat.name.last &&
        this.service.adatom[i].login.username === adat.login.username &&
        this.service.adatom[i].login.password === adat.login.password)
      {
        this.service.adatom.splice(i, 1);
      }
    }
  }

  modify(login: Login): void{
    const utvonal = 'details/' + this.service.searchByLogin(login);
    this.router.navigate([utvonal]);
  }


}
