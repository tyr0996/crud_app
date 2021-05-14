import { NgModule } from '@angular/core';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';

import {LoggedInGuard} from './logged-in.guard';
import {LoginComponent} from './login/login.component';
import {ModifyNewComponent} from './modify-new/modify-new.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'details/:id',
    component: ModifyNewComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'modify',
    component: ModifyNewComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})

export class AppRoutingModule { }
