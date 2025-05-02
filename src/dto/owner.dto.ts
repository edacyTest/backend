import { ApiProperty } from "@nestjs/swagger";
import { ProductDto } from "./product.dto";


export class OwnerDto{
    @ApiProperty()
    name: string
    
    @ApiProperty()
    products?: ProductDto[];
}