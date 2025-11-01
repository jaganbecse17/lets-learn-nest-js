import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
private   Users = [
    {
      id: 1,
      name: 'Earth',
      email: 'earth@milkyway.org',
    },
  ];

  getAllUsers() {
    return this.Users;
  }

  saveUser(user){
    this.Users.push({...user,id:this.Users.length+1})
  }
}
