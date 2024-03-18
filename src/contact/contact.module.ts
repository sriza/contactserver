import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { OrganizationModule } from 'src/organization/organization.module';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
  imports:[OrganizationModule, TypeOrmModule.forFeature([Contact])]
})
export class ContactModule {}
