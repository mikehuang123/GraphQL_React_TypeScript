import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Games extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!:number; // Auto Increment

    @Column()
    title!: string;

    @Column()
    publisher!: string;

    @Column()
    description!: string;
}