import { Organization } from "src/organization/entities/organization.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    credential:string;

    @OneToOne(()=>Organization)
    organization_id:number;
}
