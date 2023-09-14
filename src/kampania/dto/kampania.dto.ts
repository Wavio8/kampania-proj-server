import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class KampaniaDto {
    @ApiProperty({
        description: 'selectNet',
        example: 'VK',
    })
    @IsNotEmpty()
    readonly selectNet: string;

    @ApiProperty({
        description: 'text',
        example: 'Hello',
    })
    @IsNotEmpty()
    readonly text: string;

    @ApiProperty({
        description: 'inline',
        example: true,
    })
    readonly inline: boolean;

    @ApiProperty({
        description: 'butStand',
        example: '["But1","But2"]',
    })
    readonly butStand: string[];

    @ApiProperty({
        description: 'butInl',
        example: '["But1","But2"]',
    })
    readonly butInl: string[];
    @ApiProperty({
        description: 'coreId',
        example: 4,
    })
    readonly coreId: number;


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
