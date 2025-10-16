import { Routes } from '@angular/router';
//components    
import { UserListComponent } from './components/user-list/user-list.component';
import { EditAndCreateUserComponent } from './components/edit-and-create-user/edit-and-create-user.component';

export const routes: Routes = [
    {path:'', component: UserListComponent},
    {path:'add', component: EditAndCreateUserComponent},
    {path:'edit/:id', component: EditAndCreateUserComponent},
    {path:'**', redirectTo:'',pathMatch:'full'}
    
];
