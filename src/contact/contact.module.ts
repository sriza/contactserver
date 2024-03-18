import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { Organization } from 'src/organization/entities/organization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
  imports:[Organization, TypeOrmModule.forFeature([Contact])]
})
export class ContactModule {}
