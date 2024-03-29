import { Organization } from "src/organization/entities/organization.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    credential:string;

    @JoinColumn()
    @ManyToOne(()=>Organization)
    organization:Organization;
}
