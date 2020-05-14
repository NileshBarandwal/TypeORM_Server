import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLogUserDto } from '../../dto/create-loguser.dto';
import { LogUser } from './loguser.entity';

@Injectable()
export class LogUsersService {
  constructor(
    @InjectRepository(LogUser)
    private readonly LogusersRepository: Repository<LogUser>,
  ) {}

  create(createLogUserDto: CreateLogUserDto): Promise<LogUser> {
    const Loguser = new LogUser();
    Loguser.firstName = createLogUserDto.firstName;
    Loguser.Phone = createLogUserDto.Phone;
    Loguser.email = createLogUserDto.email;
    Loguser.meet = createLogUserDto.meet;
    Loguser.date = createLogUserDto.date;

    return this.LogusersRepository.save(Loguser);
  }

  async findAll(): Promise<LogUser[]> {
    return this.LogusersRepository.find();
  }

  findOne(id: string): Promise<LogUser> {
    return this.LogusersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.LogusersRepository.delete(id);
  }
}
