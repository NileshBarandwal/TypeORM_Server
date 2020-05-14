import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/entities/user/users.module';
import { LogUsersModule } from './users/entities/loguser/logusers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjsServer',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,LogUsersModule,
  ],
})
export class AppModule {}
