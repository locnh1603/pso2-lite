import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/module_name.enum';
import { GatherResource } from 'src/shared/schemas/gather-resource.schema';
import { Model } from 'mongoose';
import { GatherResourceDto } from 'src/shared/dto/gather-resource-dto.model';

@Injectable()
export class GatherResourceService {
  // private readonly GatherResourceModel = mongoose.model('pso2-gather-lite.resources', GatherResouceSchema)

  constructor(@InjectModel(ModuleNameEnums.gather_resource) private resourceModel: Model<GatherResource>) {}

  create(resource: GatherResourceDto): Promise<GatherResource> {
    resource.name = resource.name.toLowerCase();
    const document = new this.resourceModel(resource);
    return document.save();
  }

  findAll(): Promise<GatherResource[]> {
    return this.resourceModel.find({}).exec();
  }
}