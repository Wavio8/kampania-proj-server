import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma.service";
import { Prisma, Kampania } from '@prisma/client';

@Injectable()
export class KampaniaService {
    constructor(private prisma: PrismaService) {}

    async kampania(
        kampaniaWhereUniqueInput: Prisma.KampaniaWhereUniqueInput,
    ): Promise<Kampania | null> {
        return this.prisma.kampania.findUnique({
            where: kampaniaWhereUniqueInput,
        });
    }

    async kampanias(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.KampaniaWhereUniqueInput;
        where?: Prisma.KampaniaWhereInput;
        orderBy?: Prisma.KampaniaOrderByWithRelationInput;
    }): Promise<Kampania[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.kampania.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createKampania(data: Prisma.KampaniaCreateInput): Promise<Kampania> {
        return this.prisma.kampania.create({
            data,
        });
    }

    async updateKampania(params: {
        where: Prisma.KampaniaWhereUniqueInput;
        data: Prisma.KampaniaUpdateInput;
    }): Promise<Kampania> {
        const { where, data } = params;
        return this.prisma.kampania.update({
            data,
            where,
        });
    }

    async deleteKampania(where: Prisma.KampaniaWhereUniqueInput): Promise<Kampania> {
        return this.prisma.kampania.delete({
            where,
        });
    }
}
