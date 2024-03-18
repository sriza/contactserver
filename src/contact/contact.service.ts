import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>
  ) { }

  create(createContactDto: CreateContactDto) {
    let contact = new Contact();
    let {firstName, lastName, email} = createContactDto;
    
    contact.firstName = firstName;
    contact.lastName  = lastName;
    contact.email = email;
    contact.organization_id =1;

    return this.contactRepository.save(contact);
  }

  findAll() {
    return this.contactRepository.find();
  }

  findOne(id: number) {
    return this.contactRepository.findOne({where:{id:id}});
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    let contact = await this.findOne(id);
    let {firstName, lastName, email} = updateContactDto;

    if(!contact){
      throw new NotFoundException("Contact not found");
    }

    contact.firstName = firstName??contact.firstName;
    contact.lastName = lastName??contact.lastName;
    contact.email = email??contact.email;

    return this.contactRepository.save(contact);
  }

  async remove(id: number) {
    let contact = await this.findOne(id);

    if(!contact){
      throw new NotFoundException("Contact not found"); 
    }

    return await this.contactRepository.remove(contact);
  }
}
