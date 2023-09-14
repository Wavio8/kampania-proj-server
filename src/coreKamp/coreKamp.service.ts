import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma.service";
import {Prisma, CoreKamp} from '@prisma/client';

@Injectable()
export class CoreKampService {
    constructor(private prisma: PrismaService) {}

    async coreKamp(
        coreKampWhereUniqueInput: Prisma.CoreKampWhereUniqueInput,
    ): Promise<CoreKamp | null> {
        return this.prisma.coreKamp.findUnique({
            where: coreKampWhereUniqueInput,
        });
    }

    async coreKamps(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CoreKampWhereUniqueInput;
        where?: Prisma.CoreKampWhereInput;
        orderBy?: Prisma.CoreKampOrderByWithRelationInput;
    }): Promise<CoreKamp[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.coreKamp.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include: {
                kampania: true,
            },
        });
    }

    async createCoreKamp(data: Prisma.CoreKampCreateInput): Promise<CoreKamp> {
        return this.prisma.coreKamp.create({
            data,
        });
    }

    async updateCoreKamp(params: {
        where: Prisma.CoreKampWhereUniqueInput;
        data: Prisma.CoreKampUpdateInput;
    }): Promise<CoreKamp> {
        const { where, data } = params;
        return this.prisma.coreKamp.update({
            data,
            where,
        });
    }

    async deleteCoreKamp(where: Prisma.CoreKampWhereUniqueInput): Promise<CoreKamp> {
        return this.prisma.coreKamp.delete({
            where,
        });
    }
}
