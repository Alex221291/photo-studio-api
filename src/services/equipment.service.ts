import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Equipment, Picture } from '@prisma/client';
import { createReadStream } from 'fs';
import { FileService } from './file.service';
import { GetEquipmentDto } from 'src/dto/equipment/get-equipment.dto';
import { CreateEquipmentDto } from 'src/dto/equipment/create-equipment.dto';
import { UpdateEquipmentDto } from 'src/dto/equipment/update-equipment.dto';
@Injectable()
export class EquipmentService {
  constructor(private prisma: PrismaService, 
    private fileService: FileService
  ) {}

  async getById(id: string): Promise<GetEquipmentDto | null> {
    const result =  await this.prisma.equipment.findUnique({
      where: {id},
    });
    return result;
  }

  async getAll(): Promise<GetEquipmentDto[]> {
    const result =  await this.prisma.equipment.findMany({});
    return result;
  }

  async createEquipment(fileInfo?: {path: string, type: string}, equipment?: CreateEquipmentDto): Promise<Equipment> {

    let fileData: Buffer;
    let picture: Picture;
    if(fileInfo?.path){
      const fileStream = createReadStream(fileInfo?.path);
      const chunks = [];

      for await (const chunk of fileStream) {
        chunks.push(chunk);
      }

      fileData = Buffer.concat(chunks);
      picture = await this.prisma.picture.create({
        data: {
          picture: fileData,
          type: fileInfo?.type || 'image/png',
        },
      });

      await this.fileService.deleteFile(fileInfo?.path);
    }
    
    return await this.prisma.equipment.create({
      data: {
        title: equipment?.title,
        description: equipment?.description,
        count: equipment?.count,
        pictureId: picture?.id
      },
    });
  }

  async updateEquipment(fileInfo?: {path: string, type: string}, equipment?: UpdateEquipmentDto): Promise<Equipment> {
    let fileData: Buffer;
    let picture: Picture;

    const updateEquipment = await this.getById(equipment?.id);

    if(fileInfo?.path){
      const fileStream = createReadStream(fileInfo?.path);
      const chunks = [];

      for await (const chunk of fileStream) {
        chunks.push(chunk);
      }

      fileData = Buffer.concat(chunks);
      picture = await this.prisma.picture.create({
        data: {
          picture: fileData,
          type: fileInfo?.type || 'image/png',
        },
      });
    }

    await this.fileService.deleteFile(fileInfo?.path);

    await this.prisma.picture.delete({
      where : {
        id: updateEquipment?.pictureId
      }
    });
    
    return await this.prisma.equipment.update({
      where:{
        id: equipment.id,
      },
      data: {
        title: equipment?.title,
        description: equipment?.description,
        count: equipment?.count,
        pictureId: picture?.id
      },
    });
  }

  async deleteEquipment(id: string): Promise<Equipment> {
    const deleteEquipment = await this.getById(id);

    await this.prisma.picture.delete({
      where : {
        id: deleteEquipment?.pictureId
      }
    });

    return await this.prisma.equipment.delete({
      where: {id},
    });
  }
}