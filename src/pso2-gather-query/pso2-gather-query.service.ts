import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GatherResouceSchema, GatherResource } from 'src/pso2-gather-resource/pso2-gather-resources.interface';
import { GatherResourceQueryDto, GatherCuisineQueryDto } from 'src/pso2-gather-query/pso2-gather-query.interface';
import { GatherCuisineSchema } from 'src/pso2-gather-cuisine/pso2-gather-cuisine.interface';

@Injectable()
export class GatherQueryService {
  private resourcesList: GatherResource[] = [];
  private readonly GatherResourceModel = mongoose.model('pso2-gather-lite.resources', GatherResouceSchema)
  private readonly GatherCuisineModel = mongoose.model('pso2-gather-lite.cuisines', GatherCuisineSchema)

  queryResource(queryDto: GatherResourceQueryDto) {
    console.log(queryDto);
    return this.GatherResourceModel.find(queryDto).exec().then(
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
            buff: {
              category: c
            }
          })
        })

        sizes.forEach(s => {
          buffQuery.push({
            buff: {
              size: s
            }
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
          this.GatherCuisineModel.find({
            "$or": buffQuery
          }),
          this.GatherCuisineModel.find({
            "$or": recipeQuery
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

  queryCuisine(queryDto: GatherCuisineQueryDto) {
    return this.GatherCuisineModel.find(queryDto).exec().then(
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
          this.GatherResourceModel.find({
            $or: classQuery
          }),
          this.GatherResourceModel.find({
            $or: recipeQuery
          }),
          cuisines
        ])
      }).then(
        ([usedFor, recipe, cuisines]) => {
          return {
            query: queryDto,
            cuisines,
            usedFor,
            recipe
          }
        }
      )
  }
}