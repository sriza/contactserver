import { Body, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Organization } from './entities/organization.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationService {

  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>
  ) { }

  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    let {name} = createOrganizationDto; 
    let organization = new Organization();
    organization.name = name;

    return this.organizationRepository.save(organization);
  }

  findAll() {
    return this.organizationRepository.find();
  }

  findOne(id: number) {
    return this.organizationRepository.findOne({where:{id:id}});
  }

  remove(id: number) {
    return this.organizationRepository.softRemove({id:id});
  }
}
