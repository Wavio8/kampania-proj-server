import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {KampaniaController} from "./kampania.controller";
import {KampaniaService} from "./kampania.service";

@Module({
    controllers: [KampaniaController],
    providers: [KampaniaService, PrismaService],
})
export class KampaniaModule {}
