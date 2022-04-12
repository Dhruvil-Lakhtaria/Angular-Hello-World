import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello_world';
  topics = ["topic1","topic2"]
  userModel = new User("Dhruvil","a@gmail.com","1234567890","topic1","morning",true)
}
