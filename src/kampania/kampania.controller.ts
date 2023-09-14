import {
    Controller,
    Get,
    Delete,
    NotImplementedException,
    Post,
    Query,
    Param,
    Body,
    HttpException,
    HttpStatus,
} from '@nestjs/common';

import {
    ApiBasicAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import {Kampania} from '@prisma/client';

import {KampaniaService} from "./kampania.service";
import {KampaniaDto} from "./dto/kampania.dto";

@ApiBasicAuth()
@ApiTags('Kapania')
@Controller('kampania')
export class KampaniaController {
    constructor(private kampaniaService: KampaniaService) {}

    @ApiOperation({
        summary: 'Get all kampanias',
    })
    @ApiResponse({
        status: 501,
        description: 'Not implemented',
    })
    @ApiResponse({
        status: 200,
        description: 'OK',
    })
    @Get('/kampanias')
    public async getAllKampanias(): Promise<{ kampanias: Kampania[] }> {
        const kampanias = await this.kampaniaService.kampanias({});
        return {kampanias};
    }
    @ApiOperation({
        summary: 'Get kampania by id',
    })
    @ApiResponse({
        status: 200,
        description: 'OK',
    })
    @Get('/:id')
    public async getKampaniaById(@Param('id') id: number): Promise<Kampania> {
        return this.kampaniaService.kampania({ id: Number(id) });
    }

    @ApiOperation({
        summary: 'Add a new kampania',
    })
    @ApiResponse({
        status: 501,
        description: 'Not implemented',
    })
    @ApiResponse({
        status: 200,
        description: 'OK',
    })
    @Post('add')
    public async addKampania(
        @Body()
            kampaniaData: KampaniaDto,
    ): Promise<Kampania> {
        const { selectNet, text, inline, butStand,butInl,coreId } = kampaniaData;

        return this.kampaniaService.createKampania({
            selectNet,
            text,
            inline,
            butStand,
            butInl,
            core: {
                connect: { id: coreId },
            },

        });



    }

    // @ApiOperation({
    //     summary: 'Add a new kampania',
    // })
    // @ApiResponse({
    //     status: 501,
    //     description: 'Not implemented',
    // })
    // @ApiResponse({
    //     status: 200,
    //     description: 'OK',
    // })
    // @Post('add')
    // public async addKampania(
    //     @Body()
    //         kampaniaData: KampaniaDto,
    // ): Promise<Kampania> {
    //     const { selectNet, text, inline, butStand,butInl,userId } = kampaniaData;
    //
    //     return this.kampaniaService.createKampania({
    //         selectNet,
    //         text,
    //         inline,
    //         butStand,
    //         butInl,
    //         user: {
    //             connect: {id: userId},
    //         },
    //     });
    //
    // }

    @Get('findAll/:searchString')
    async getFilteredPosts(
        @Param('searchString') searchString: string,
    ): Promise<Kampania[]> {
        return this.kampaniaService.kampanias({
            where: {
                OR: [
                    {
                        coreId:  parseInt(searchString) ,
                    },
                ],
            },
        });
    }
    @ApiOperation({
        summary: 'Delete kampania by ID',
    })
    @ApiResponse({
        status: 501,
        description: 'Not implemented',
    })
    @ApiResponse({
        status: 200,
        description: 'OK',
    })
    @Delete('/:id')
    public async deleteKampaniaById(@Param('id') id: number): Promise<Kampania> {
        const findKampania = this.kampaniaService.kampania({ id: Number(id) });
        if (findKampania != null) {
            return this.kampaniaService.deleteKampania({ id: Number(id) });
        } else {
            throw new HttpException('Kampania not exist', HttpStatus.BAD_REQUEST);
        }
    }
}
