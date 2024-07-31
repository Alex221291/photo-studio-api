import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Tariff } from '@prisma/client';
import { GetTariffDto } from 'src/dto/tariff/get-tariff.dto';
import { CreateTariffDto } from 'src/dto/tariff/create-tariff.dto';
import { UpdateTariffDto } from 'src/dto/tariff/update-tariff.dto';
@Injectable()
export class TariffService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string): Promise<GetTariffDto | null> {
    const result = await this.prisma.tariff.findUnique({
      where: {id},
    });
    return {
      id: result?.id,
      caption: result?.timeInterval,
      description: result?.options,
      price: result?.price,
    };
  }

  async getAll(): Promise<GetTariffDto[]> {
    const tariffs = await this.prisma.tariff.findMany({orderBy: {
      savings: 'asc'
    }});
    return tariffs?.map(tariff => {
      return {
        id: tariff?.id,
        caption: tariff?.timeInterval,
        description: tariff?.options,
        price: tariff?.price,
      };
    });
  }

  async createTariff(tariff: CreateTariffDto): Promise<GetTariffDto> {
    const result = await this.prisma.tariff.create({
      data: {
        timeInterval: tariff?.caption,
        options: tariff?.description,
        price: tariff?.price,
      },
    });

    return await this.getById(result.id);
  }

  async updateTariff(tariff: UpdateTariffDto): Promise<GetTariffDto> {
    const result = await this.prisma.tariff.update({
      data: {
        timeInterval: tariff?.caption,
        options: tariff?.description,
        price: tariff?.price,
      },
      where: {id: tariff.id},
    });

    return await this.getById(result.id);
  }

  async deleteTariff(id: string): Promise<GetTariffDto> {
    const result = await this.prisma.tariff.delete({
      where: {id},
    });

    return {
      id: result?.id,
      caption: result?.timeInterval,
      description: result?.options,
      price: result?.price,
    };
  }
}