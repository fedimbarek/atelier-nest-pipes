import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Headers,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(@Query('status') status?: string) {
    return this.usersService.findAll(status);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Get('active/:status')
  getByStatus(@Param('status') status: string) {
    return this.usersService.findAll(status);
  }

  @Post()
  create(
    @Body() createUserDto: CreateUserDto,
    @Headers('Authorization') auth: string,
  ) {
    console.log('Authorization header:', auth);
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }
}
