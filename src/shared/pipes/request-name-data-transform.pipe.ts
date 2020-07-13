import { PipeTransform, ArgumentMetadata, Injectable } from "@nestjs/common";

@Injectable()
export class RequestDataNameTransformPipe implements PipeTransform<Object, Object> {
  transform(value: Object, metadata: ArgumentMetadata): Object {
    const newValue = JSON.parse(JSON.stringify(value));
    if (Object.keys(newValue).includes('name')) {
      newValue['name'] = newValue['name'].toLowerCase();
    }
    return newValue;
  }
}

@Injectable()
export class RequestParamNameTransformPipe implements PipeTransform<string, string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    return value.toLowerCase();
  }
}