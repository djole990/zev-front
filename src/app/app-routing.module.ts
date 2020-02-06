import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'user', component: UserFormComponent },
  { path: 'user/:id', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
