import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleNameEnums } from 'src/shared/enum/module_name.enum';
import { Model } from 'mongoose';
import { GatherResource } from 'src/shared/schemas/gather-resource.schema';
import { GatherCuisine } from 'src/shared/schemas/gather-cuisine.schema';
import { GatherResourceQueryDto, GatherCuisineQueryDto, GatherResourceTypeQueryDto, GatherResourceTypeQueryResult, GatherCraftQueryDto, GatherCraftQueryResult } from 'src/shared/dto/gather-query-dto.model';
import { GatherCraft } from 'src/shared/schemas/gather-craft.schema';
import { GatherCraftDto } from 'src/shared/dto/gather-craft-dto.model';

@Injectable()
export class GatherQueryService {

  constructor(
    @InjectModel(ModuleNameEnums.gather_resource) 
    private resourceModel: Model<GatherResource>,
    @InjectModel(ModuleNameEnums.gather_cuisine) 
    private cuisineModel: Model<GatherCuisine>,
    @InjectModel(ModuleNameEnums.gather_craft) 
    private craftModel: Model<GatherCraft>
  ) {}

  queryResource(queryDto: GatherResourceQueryDto) {
    return this.resourceModel.find(queryDto).then(
      (resources: mongoose.Document[]) => {
        const categories = [];
        const sizes = [];
        const names = [];
        const buffQuery = [];
        const recipeQuery = [];

        resources.forEach(res => {
          if(!categories.find(c => c === res.toObject().class.category)) {
            categories.push(res.toObject().class.category)
          }
          if(!sizes.find(c => c === res.toObject().class.size)) {
            sizes.push(res.toObject().class.size)
          }
          if(!names.find(n => n === res.toObject().name)) {
            names.push(res.toObject().name)
          }
        })

        categories.forEach(c => {
          buffQuery.push({
            'buff.class.category': c
          })
        })

        sizes.forEach(s => {
          buffQuery.push({
            'buff.class.size': s
          })
        })

        names.forEach(n => {
          recipeQuery.push({
            recipe: {
              $elemMatch: {resource: n}
            }
          })
        })

        return Promise.all([
          this.cuisineModel.find({
            "$or": buffQuery
          }),
          Promise.all([
            this.cuisineModel.find({
              "$or": recipeQuery
            }),
            this.craftModel.find({
              "$or": recipeQuery
            })
          ]).then(([cuisines, crafts]) => {
            return [...cuisines, ...crafts]
          }),
          resources
        ]) 
      }
    ).then(
      ([assists, usedIn, resources]) => {
        return {
          query: queryDto,
          assists,
          resources,
          usedIn
        };
      }
    )
  }

  queryType(queryDto: GatherResourceTypeQueryDto): Promise<GatherResourceTypeQueryResult> {
    const cuisineQuery = [];
    const resourceQuery = [];
    Object.keys(queryDto.class).forEach(key => {
      const cQuery = {};
      const rQuery = {};
      cQuery[`buff.class.${key}`] = queryDto.class[key];
      rQuery[`class.${key}`] = queryDto.class[key];
      cuisineQuery.push(cQuery);
      resourceQuery.push(rQuery);
    });
    return Promise.all([
      this.resourceModel.find({
        "$or": resourceQuery
      }),
      this.cuisineModel.find({
        "$or": cuisineQuery
      })
    ]).then(([resources, cuisinesFor]) => {
      return {
        resources,
        cuisinesFor
      } as GatherResourceTypeQueryResult
    })
  }

  queryCuisine(queryDto: GatherCuisineQueryDto) {
    return this.cuisineModel.find(queryDto).then(
      (cuisines: mongoose.Document[]) => {
        const ingredients = [];
        const categories = [];
        const sizes = [];
        const classQuery = [];
        const recipeQuery = [];

        cuisines.forEach(res => {
          if(!categories.find(c => c === res.toObject().buff.class.category) && !!res.toObject().buff.class.category) {
            categories.push(res.toObject().buff.class.category);
          }
          if(!sizes.find(c => c === res.toObject().buff.class.size) && !!res.toObject().buff.class.size) {
            sizes.push(res.toObject().buff.class.size);
          }
          res.toObject().recipe.forEach(
            ing => {
              if(!ingredients.find(c => c === ing.resource)) {
                ingredients.push(ing.resource);
              }
            }
          )
        });

        if(categories.length !== 0) {
          categories.forEach(c => {
            classQuery.push({
              'class.category': c
            })
          })
        }

        if (sizes.length !== 0) {
          sizes.forEach(s => {
            classQuery.push({
              'class.size': s
            })
          })
        }

        ingredients.forEach(i => {
          recipeQuery.push({
            name: i
          })
        })

        return Promise.all([
          classQuery,
          this.resourceModel.find({
            $or: classQuery
          }),
          this.resourceModel.find({
            $or: recipeQuery
          }),
          cuisines
        ])
      }).then(
        ([usedForClass, usedFor, recipe, cuisines]) => {
          return {
            query: queryDto,
            cuisines,
            usedFor,
            usedForClass,
            recipe
          }
        }
      )
  }

  queryCraft(queryDto: GatherCraftQueryDto): Promise<GatherCraftQueryResult> {
    return this.craftModel.findOne(queryDto).then(
      (craft: GatherCraft) => {
        const ingredients = [];
        const recipeQuery = [];

        craft.recipe.forEach(
          ing => {
            if(!ingredients.find(c => c === ing.resource)) {
              ingredients.push(ing.resource);
            }
          }
        )
        ingredients.forEach(i => {
          recipeQuery.push({
            name: i
          })
        })
        return Promise.all([
          this.resourceModel.find({
            $or: recipeQuery
          }),
          craft
        ])
      }
    ).then(([resources, craft]) => {
      return {
        craft,
        inRecipe: resources
      }
    })
  }
}