import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Owner } from "./owner.entity";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    price: number
    @ManyToOne(() => Owner, (owner) => owner.products, { onDelete: 'CASCADE', eager: false})
    owner: Owner;
    @Column()
    ownerId: number;
}