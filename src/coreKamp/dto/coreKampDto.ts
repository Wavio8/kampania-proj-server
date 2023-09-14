import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CoreKampDto {
    @ApiProperty({
        description: 'name',
        example: 'Kampania1',
    })
    readonly name: string;

}
// export interface KampaniaDto {
//     selectNet: string;
//     text: string;
//     inline: boolean;
//     butStand: string[];
//     butInl: string[];
//
//
// }
