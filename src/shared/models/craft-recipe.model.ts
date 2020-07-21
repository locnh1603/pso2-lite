import { ApiProperty } from "@nestjs/swagger";

export class CraftRecipe {
  @ApiProperty()
  resource: string;
  @ApiProperty()
  amount: number;
}