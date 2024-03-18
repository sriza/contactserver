import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { OrganizationService } from 'src/organization/organization.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private organizationService: OrganizationService
  ) { }

  async create(createUserDto: CreateUserDto) {
    let user = new User();
    let { name, credential, organization } = createUserDto;
    let organizationData = await this.organizationService.findBy(organization);

    if (!organizationData) {
      organizationData = await this.organizationService.create({"name":organization});
    }

    user.name = name;
    user.credential = credential;
    user.organization = organizationData;

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.findOne(id);
    let { name, credential } = updateUserDto;

    if (!user) {
      throw new NotFoundException("user not found");
    }

    user.name = name ?? user.name;
    user.credential = credential ?? user.credential;

    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    let user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return this.userRepository.remove(user);
  }
}
