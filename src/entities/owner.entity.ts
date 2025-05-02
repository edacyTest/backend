import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "./product.entity";


@Entity()
export class Owner{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @OneToMany(() => Product, (product) => product.owner, { cascade: true , eager: true})
    products: Product[];
}