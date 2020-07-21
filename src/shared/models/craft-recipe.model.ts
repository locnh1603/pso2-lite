import { ApiProperty } from "@nestjs/swagger";

export class CraftRecipe {
  @ApiProperty({type: String})
  resource: string;
  @ApiProperty({type: Number})
  amount: number;
}