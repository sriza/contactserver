import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from 'src/organization/entities/organization.entity';
import { OrganizationModule } from 'src/organization/organization.module';

@Module({
  imports:[OrganizationModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
