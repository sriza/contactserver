import { Body, ConflictException, Injectable } from '@nestjs/common';
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

  /**
   * Create new organization
   * 
   * @param createOrganizationDto 
   * 
   * @returns 
   */
  async create(createOrganizationDto: CreateOrganizationDto) {
    let {name} = createOrganizationDto; 
    let existingOrganization = await this.findBy(name);

    if(existingOrganization){
      throw new ConflictException("Organization already exists");
    }

    let organization = new Organization();
    organization.name = name;

    return this.organizationRepository.save(organization);
  }

  /**
   * Return all organizations
   * 
   * @returns 
   */
  findAll() {
    return this.organizationRepository.find();
  }

  /**
   * Find organization by id
   * 
   * @param id
   *  
   * @returns 
   */
  findOne(id: number) {
    return this.organizationRepository.findOne({where:{id:id}});
  }

  /**
   * Find organization by name
   * 
   * @param id
   *  
   * @returns 
   */
  findBy(name:string){
    return this.organizationRepository.findOne({where:{name:name}})
  }

  /**
   * Soft deletes organization by id
   * 
   * @param id
   *  
   * @returns 
   */
  remove(id: number) {
    return this.organizationRepository.softRemove({id:id});
  }
}
