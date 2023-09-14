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
import {CoreKampService} from "./coreKamp.service";
import {CoreKamp, Kampania} from "@prisma/client";
import {CoreKampDto} from "./dto/coreKampDto";


@ApiBasicAuth()
@ApiTags('Kapania')
@Controller('coreKamp')
export class CoreKampController {
    constructor(private coreKampService: CoreKampService) {}

    @ApiOperation({
        summary: 'Get all coreKamps',
    })
    @ApiResponse({
        status: 501,
        description: 'Not implemented',
    })
    @ApiResponse({
        status: 200,
        description: 'OK',
    })
    @Get('/coreKamps')
    public async getAllCoreKamps(): Promise<{ coreKamp: CoreKamp[] }> {
        const coreKamp = await this.coreKampService.coreKamps({});
        return {coreKamp};
    }

    @ApiOperation({
        summary: 'Add a new coreKamps',
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
    public async addCoreKamps(
        @Body()
            coreKampsData: CoreKampDto,
    ): Promise<CoreKamp> {

        return this.coreKampService.createCoreKamp(coreKampsData);

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

}
