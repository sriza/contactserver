import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { Organization } from './entities/organization.entity';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService],
})

export class OrganizationModule {}
