import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import * as _ from 'lodash'

@Injectable()
export class RequestRecipeGuard implements CanActivate{
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    return this.validateRecipe(request);
  }

  validateRecipe(request: Request): boolean {
    const body = JSON.parse(JSON.stringify(request.body));
    return !!body.recipe && Object.keys(body.recipe).length > 0 && !Object.keys(body.recipe).some(key => _.isEmpty(body.recipe[key]));
  }
}