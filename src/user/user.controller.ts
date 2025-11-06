import { UserEntity } from 'src/contracts/user.type';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  saveUser(@Body() data: Omit<UserEntity, 'id'>) {
    if (!data.name || !data.email) return { error: 'No data provided' };
    return this.userService.saveUser(data);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() data: Omit<UserEntity, 'id'>) {
    return this.userService.updateUser(id, data);
  }
}
