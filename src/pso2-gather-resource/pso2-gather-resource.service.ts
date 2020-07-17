import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';
import { GatherResource } from 'src/shared/schemas/gather-resource.schema';
import { Model } from 'mongoose';
import { GatherResourceDto } from 'src/shared/dto/gather-resource-dto.model';

@Injectable()
export class GatherResourceService {
  constructor(@InjectModel(ModuleNameEnums.gather_resource) private resourceModel: Model<GatherResource>) {}

  create(resource: GatherResourceDto): Promise<GatherResource> {
    resource.name = resource.name.toLowerCase();
    const document = new this.resourceModel(resource);
    return document.save();
  }

  findAll(): Promise<GatherResource[]> {
    return this.resourceModel.find({}).then();
  }

  delete(name: string): Promise<GatherResource> {
    return this.resourceModel.findOneAndDelete({name}).then();
  }

  update(name: string, newResource: GatherResourceDto): Promise<GatherResource> {
    return this.resourceModel.findOneAndUpdate({name}, newResource, {new: true}).then();
  }
}