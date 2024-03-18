import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { Organization } from 'src/organization/entities/organization.entity';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
  imports:[Organization]
})
export class ContactModule {}
