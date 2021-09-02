import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  usersUrl: string = 'https://springular-nawfel.herokuapp.com/api/users';
  
  constructor(private http: HttpClient) { }

  //Get Users
  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.usersUrl}`);
  }

  //Delete User
  deleteUser(user:User):Observable<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.delete<User>(url, httpOptions);
  }

  //Add user
  addUser(user:User):Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }
  //Update user
  updateUser(user: User): Observable<any> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put<User>(url, User, httpOptions);
  }

}
