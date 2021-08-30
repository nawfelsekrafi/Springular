import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  cin:number;
  id:number;
  users:User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => this.users = users
      );
  }

  addUser(){
    const user ={
      id: Math.random(),
      name: this.name,
      cin: this.cin
    }
    
    this.userService.addUser(user).subscribe(u =>{
      this.users.push(u);
    });
  }

  updatePost(user: User){
    this.userService.updateUser(user).subscribe();
  }
  
  deleteUser(user:User){
    //Remove from UI
    this.users = this.users.filter(u => u.id !== user.id);
    //Remove from Server
    this.userService.deleteUser(user).subscribe();
  }

}
