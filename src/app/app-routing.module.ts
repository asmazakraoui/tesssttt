import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Adjust path as needed
import { ChatComponent } from './components/chat/chat.component'; // Adjust path as needed
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Set login component as the default route
  { path: 'chat', component: ChatComponent }, // Example of another route
  { path: 'login', component: LoginComponent }, // Example of another route
  { path: 'register', component: RegisterComponent }, // Example of another route


  // You can add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
