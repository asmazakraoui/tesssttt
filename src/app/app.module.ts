import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // To use ngModel
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'; // Import your components
import { ChatComponent } from './components/chat/chat.component'; // Import your components
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent, // Declare your components here
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add AppRoutingModule to imports
    FormsModule, // Add FormsModule to enable ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
