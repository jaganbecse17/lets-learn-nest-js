import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/contracts/user.type';
import { USERS_LIST } from 'src/mock/user.mock';

@Injectable()
export class UserService {
  onModuleInit() {
    console.log('NotificationService initialized by IoC container');
  }
 

  getAllUsers() {
    return USERS_LIST;
  }

  getUserById(id: number) {
    return USERS_LIST.find((user) => user.id == id);
  }

  saveUser(user: Omit<UserEntity, 'id'>) {
    USERS_LIST.push({ ...user, id: USERS_LIST.length + 1 });
    return user;
  }

  updateUser(id: number, userData: Omit<UserEntity, 'id'>) {
    const userIndex = USERS_LIST.findIndex((user) => user.id == id);
    if (userIndex === -1) return null;
    USERS_LIST[userIndex] = { ...USERS_LIST[userIndex], ...userData };
    return USERS_LIST[userIndex];
  }
}
