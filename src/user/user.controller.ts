import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  saveUser(@Body() data) {
    return this.userService.saveUser(data)
  }
  
}
