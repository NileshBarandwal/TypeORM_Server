import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogUser } from './loguser.entity';
import { LogUsersController } from './logusers.controller';
import { LogUsersService } from './logusers.service';

@Module({
  imports: [TypeOrmModule.forFeature([LogUser])],
  providers: [LogUsersService],
  controllers: [LogUsersController],
})
export class LogUsersModule {}
