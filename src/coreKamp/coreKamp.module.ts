import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {CoreKampController} from "./coreKamp.controller";
import {CoreKampService} from "./coreKamp.service";

@Module({
    controllers: [CoreKampController],
    providers: [CoreKampService, PrismaService],
})
export class CoreKampModule {}
