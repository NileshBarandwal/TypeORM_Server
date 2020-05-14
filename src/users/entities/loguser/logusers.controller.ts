import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateLogUserDto } from '../../dto/create-loguser.dto';
import { LogUser } from './loguser.entity';
import { LogUsersService } from './logusers.service';

@Controller('logusers')
export class LogUsersController {
  constructor(private readonly LogusersService: LogUsersService) {}

  @Post()
  create(@Body() createUserDto: CreateLogUserDto): Promise<LogUser> {
    return this.LogusersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<LogUser[]> {
    return this.LogusersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LogUser> {
    return this.LogusersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.LogusersService.remove(id);
  }

}
