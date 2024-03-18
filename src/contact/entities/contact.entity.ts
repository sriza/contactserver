import { Organization } from "src/organization/entities/organization.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column()
    email:number;

    @OneToOne(()=>Organization)
    organization_id:number;
}
