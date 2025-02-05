import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private socket = io('http://localhost:5000');

  sendMessage(message: any) {
    this.socket.emit('sendMessage', message);
  }

  receiveMessage(callback: (msg: any) => void) {
    this.socket.on('receiveMessage', callback);
  }
}
