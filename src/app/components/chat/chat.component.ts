import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  newMessage: string = '';  // Declare as string
  messages: string[] = [];  // An array to hold the messages

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage);  // Add the new message to the list
      this.newMessage = '';  // Clear the input after sending
      console.log('Message sent:', this.newMessage);
    }
  }
}
