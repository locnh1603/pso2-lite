import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { QueryBus } from '@nestjs/cqrs';
import { ResourceQuery, GeneralQuery } from 'src/pso2-gather-query/queries/gather-query.query';
import { GatherResourceQueryDto } from 'src/shared/models/gather-query-dto.model';

@Controller('gather-query')
export class GatherQueryController {
  constructor(private readonly queryBus: QueryBus) {}

  @Post('resource')
  @ApiBody({type: GatherResourceQueryDto})
  queryResource(@Body() query: GatherResourceQueryDto) {
    query.query = query.query.toLowerCase();
    return this.queryBus.execute(new ResourceQuery(query.query));
  }

  @Get('any/:query')
  queryAny(@Param('query') query: string) {
    query = query.toLowerCase();
    return this.queryBus.execute(new GeneralQuery(query));
  }

  // @UseGuards(RequestValidatorGuard)
  // @Post('cuisine')
  // @ApiBody({type: GatherCuisineQueryDto})
  // @ApiResponse({status: 201, type: GatherCuisineQueryResult})
  // queryCuisine(@Body() queryDto: GatherCuisineQueryDto) {
  //   queryDto.name = queryDto.name.toLowerCase();
  //   return this.queryService.queryCuisine(queryDto);
  // }

  // @UseGuards(RequestValidatorGuard)
  // @Post('type')
  // @ApiBody({type: GatherResourceTypeQueryDto})
  // @ApiResponse({status: 201, type: GatherResourceTypeQueryResult})
  // queryType(@Body() queryDto: GatherResourceTypeQueryDto) {
  //   return this.queryService.queryType(queryDto);
  // }

  // // @UseGuards(RequestValidatorGuard)
  // @Post('ring')
  // @ApiBody({type: GatherCraftQueryDto})
  // @ApiResponse({status: 201, type: GatherCraftQueryResult})
  // queryRing(@Body() queryDto: GatherCraftQueryDto) {
  //   queryDto.name = queryDto.name.toLowerCase();
  //   return this.queryService.queryCraft(queryDto);
  // }
}