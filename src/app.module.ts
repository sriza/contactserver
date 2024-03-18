// modules
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { OrganizationModule } from './organization/organization.module';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';
// services
import { AppService } from './app.service';
// entities
import { Organization } from './organization/entities/organization.entity';
import { User } from './user/entities/user.entity';
import { Contact } from './contact/entities/contact.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT??"5432")||5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Organization, User, Contact],
      synchronize: true
    }),
    UserModule,
    OrganizationModule,
    ContactModule
  ],
  providers: [AppService],
})
export class AppModule { }
